import classes from './ExpenseItem.module.css'
import moment from 'moment/moment';
function ExpenseItem({ name, amount, date }) {



    return (
        <>

            <div className={classes.card}>



                <h1 className={classes.name}>{name}</h1>
                <p>{moment(date, "DDMMYYYY").fromNow()}</p>

                <h2 className={classes.price}>{amount}</h2>


            </div>


        </>


    );
}

export default ExpenseItem;