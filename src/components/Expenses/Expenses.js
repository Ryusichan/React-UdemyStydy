import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import styled from 'styled-components'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from './ExpensesList'

const Cards = styled(Card)`
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
`

function Expenses (props) {

const [useFilter, setUseFilter] = useState('2020');

const onSubmitDate = (enterDate) => {
  setUseFilter(enterDate);
}
const dateInfo = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === useFilter;
})

return (
  <div>
    <Cards className="expenses">
      <ExpensesFilter selected={useFilter} onChangeFilter={onSubmitDate} />
      <ExpensesList items={dateInfo}/>
    </Cards>
    </div>
);

}

export default Expenses;