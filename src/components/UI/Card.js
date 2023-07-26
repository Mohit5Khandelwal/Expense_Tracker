import './Card.css';

// This component is not use directly in main 

function Card(props) {
    const classes = 'card ' + props.className;
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;