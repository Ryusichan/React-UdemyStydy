import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import styled from 'styled-components'

const Cards = styled(Card)`
    padding: 1rem;
    background-color: rgb(31, 31, 31);
    margin: 2rem auto;
    width: 50rem;
    max-width: 95%;
`

function Expenses (props) {

return (
    <Cards className="expenses">
        <ExpenseItem 
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpenseItem 
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        <ExpenseItem 
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        <ExpenseItem 
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        />
    </Cards>
);

}

export default Expenses;