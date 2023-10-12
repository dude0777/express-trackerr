import classes from './ExpenseList.module.css'
import ExpenseItem from './ExpenseItem';

function ExpenseList({ data, onRemove }) {

    console.log(data)



    return (


        <div className={classes.cardcont}>

            {data.map((item) =>
                <ExpenseItem key={item.id}
                    onRemove={onRemove}
                    id={item.id}
                    currency={item.currency}
                    name={item.expenseName}
                    amount={item.amount}
                    date={item.date}
                    description={item.description} />)}


        </div>
    );
}

export default ExpenseList;