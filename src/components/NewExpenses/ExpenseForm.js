import React from 'react';
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

const ExpenseForm = () => {
    return (
        <form>
            <NewExpenseControls>
                <NewExpenseControl>
                    <label>Title</label>
                    <input type="text" />
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </NewExpenseControl>
                <NewExpenseControl>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" />
                </NewExpenseControl>
                <NewExpenseActions>
                    <button type="submit">Add Expense</button>
                </NewExpenseActions>
            </NewExpenseControls>
        </form>
    )
}
export default ExpenseForm;