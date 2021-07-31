import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {



  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>
          {props.amount}
          <span style={{ fontSize: '0.8rem' }}>
            MVR
          </span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;