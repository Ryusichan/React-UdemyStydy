import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import styled from 'styled-components';

const NewExpensesdiv = styled.div`
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

    button{
        font: inherit;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 1px solid #40005d;
        background-color: #40005d;
        color: white;
        border-radius: 12px;
        margin-right: 1rem;

        &:hover,:active{
            background-color: #510674;
            border-color: #510674;
        }
    }
    button.alternative{
        color: #220131;
        border-color: transparent;
        background-color: transparent;

        &:hover,:active{
            background-color: #ddb3f8;
        }
    }
`

const NewExpenses = (props) => {

    const [ hideBtn, setHidebtn ] = useState(false);

    const onSubmitData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onSubmitExpenses(expenseData);
        setHidebtn(false);
    }

    const setbtnHandler = () => {
        setHidebtn(true);
    }
    const closeHandler = () => {
        setHidebtn(false);
    }

    // console.log('hidebtn', hideBtn);
    if(hideBtn === false){
        return <button onClick={setbtnHandler}>Add New Expense</button>;
    }

    return(
        <NewExpensesdiv >
            <ExpenseForm hideBtnhandler={closeHandler} onSubmitRecive={onSubmitData}/>
        </NewExpensesdiv>
    )
}
export default NewExpenses;