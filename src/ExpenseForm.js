
import classes from './ExpenseForm.module.css'

function ExpenseForm() {
    return (

        <div className={classes.container}>
            <form className={classes.form} action="" >
                <div className={classes.formcont}>
                    <div className={classes.inputcont}>
                        <input type="text" className={classes.forminput} placeholder="Enter Expense" />
                        <input type="number" className={classes.forminput} placeholder="Enter Amount" />
                        <input type="date" className={classes.forminput} placeholder=" Enter date" /></div>
                    <div> <button className={classes.add}>Add Expense</button></div>
                </div>
            </form>

        </div>


    );
}

export default ExpenseForm;