import React, { useState } from 'react';
import styled from 'styled-components';

const NewExpenseControls = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`
const NewExpenseControl = styled.div`
    label{
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
    }
    input{
        font: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
    }
`
const NewExpenseActions = styled.div`
    text-align: right;
`

const ExpenseForm = (props) => {
    const [ addTitle, setAddtitle ] = useState('');
    const [ addAmount, setAddAmount ] = useState('');
    const [ addDate, setAddDate ]= useState('');
    // const [ userInput, setUserInput ] = useState({   //react Hook multi use
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })

    const setAddTitleHandler = (event) => {
        setAddtitle(event.target.value);
        // setUserInput((prevState) => {       //react Hook multi use
        //     return{
        //     ...prevState,
        //     enterTitle: event.target.value
        //     }
        // })
    }

    const setAddAmountHandler = event => {
        setAddAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value
        // })
    }

    const setAddDateHandler = event => {
        setAddDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // })
    }

    const submitHandler = ( event ) => {
        event.preventDefault();

        const expense = {
            title: addTitle,
            amount: addAmount,
            date: new Date(addDate)
        }

        props.onSubmitRecive(expense);

        setAddtitle('');
        setAddAmount('');
        setAddDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <NewExpenseControls>
                <NewExpenseControl>
                    <label>Title</label>
                    <input type="text" value={addTitle} onChange={setAddTitleHandler}/>
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Amount</label>
                    <input type="number" value={addAmount} min="0.01" step="0.01" onChange={setAddAmountHandler}/>
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Date</label>
                    <input type="date" value={addDate} min="2019-01-01" step="2022-12-31" onChange={setAddDateHandler}/>
                </NewExpenseControl>
                <NewExpenseActions>
                    <button type="submit">Add Expense</button>
                </NewExpenseActions>
            </NewExpenseControls>
        </form>
    )
}
export default ExpenseForm;