
import classes from './ExpenseForm.module.css'

import { useState } from 'react';


function ExpenseForm({ onExpenseAdd }) {

    const [enteredExpense, setEnteredExpense] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const handleExpenseChange = (e) => {

        setEnteredExpense(e.target.value)

    }
    const handleAmountChange = (e) => {
        setEnteredAmount(e.target.value)
    }
    const handleDateChange = (e) => {
        setEnteredDate(e.target.value)
    }
    const newExpense = {
        expenseName: enteredExpense,
        amount: enteredAmount,
        date: enteredDate


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onExpenseAdd(newExpense)
    }

    return (

        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form} action="" >
                <div className={classes.formcont}>
                    <div className={classes.inputcont}>
                        <input onChange={handleExpenseChange} type="text" className={classes.forminput} placeholder="Enter Expense" />
                        <input type="number" onChange={handleAmountChange} className={classes.forminput} placeholder="Enter Amount" />
                        <input type="date" onChange={handleDateChange} className={classes.forminput} placeholder=" Enter date" /></div>
                    <div> <button type='submit' className={classes.add}>Add Expense</button></div>
                </div>
            </form>

        </div>


    );
}

export default ExpenseForm;