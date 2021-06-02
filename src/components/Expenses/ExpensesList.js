import React from 'react';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const ExpenseList = styled.ul`
    list-style: none;
    padding: 0;
`
const ExpensesFallback = styled.h2`
    color: white;
    text-align: center;
`

const ExpensesList = (props) => {
    if (props.items.length === 0 ){
        return <ExpensesFallback style={{ color: 'white'}}>no sign</ExpensesFallback>;
    }
  
  return(
      <ExpenseList>
        {props.items.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                date={expense.date} 
                amount={expense.amount}
            />
        ))}
    </ExpenseList>
)}

export default ExpensesList;