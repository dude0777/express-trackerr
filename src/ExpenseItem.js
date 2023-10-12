import classes from './ExpenseItem.module.css'
import moment from 'moment/moment';
import deleticon from './assets/delete.png'

function ExpenseItem({ name, id, currency, amount, date, description, onRemove }) {




    const handleRemovee = () => {
        onRemove(id)

    }

    return (
        <>

            <div className={classes.card}>


                <div className={classes.container2}>
                    <h1 className={classes.name}>{name}</h1>
                    <p>{moment(date).format('YYYY-MM-DD')}
                    </p>





                    <h2 className={classes.price}>{amount}</h2></div>
                <div>
                    <p>{description}</p></div>
                <button onClick={handleRemovee} className={classes.btn}><img src={deleticon} alt="" /></button>
            </div>


        </>


    );
}

export default ExpenseItem;