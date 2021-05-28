import styled from 'styled-components';

const Cardbox = styled.div`
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`

function Card(props){
    const classes = 'card ' + props.className;

    return <Cardbox className={classes}>{props.children}</Cardbox>
}

export default Card;