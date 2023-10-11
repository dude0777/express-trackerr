import classes from './ExpenseList.module.css'
import ExpenseItem from './ExpenseItem';
function ExpenseList({ data }) {

    console.log(data)



    return (


        <div className={classes.cardcont}>

            {data.map((item) => <ExpenseItem key={item.expenseName} name={item.expenseName} amount={item.amount} date={item.date} description={data.description} />)}


        </div>
    );
}

export default ExpenseList;