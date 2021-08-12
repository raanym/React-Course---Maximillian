import classes from './Card.module.css';

const Card = (props) => {

  // const addClasses = props.className + ' ' + classes.card;

  return <div className={`${props.className} ${classes.card}`}>{props.children}</div>
}

export default Card;