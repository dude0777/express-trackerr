import classes from './ExpenseItem.module.css'
import moment from 'moment/moment';
function ExpenseItem({ name, amount, date, description }) {



    return (
        <>

            <div className={classes.card}>


                <div className={classes.container2}>
                    <h1 className={classes.name}>{name}</h1>
                    <p>{moment(date, "DD-MM-YYYY").format("YYYY-MM-DD")}</p>


                    <h2 className={classes.price}>{amount}</h2></div>
                <div>
                    <p>{description}</p></div>
            </div>


        </>


    );
}

export default ExpenseItem;