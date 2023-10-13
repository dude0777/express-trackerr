import Header from './Header';
import './App.css';
import { useState } from 'react';
import sampledata from './sample-data.json'
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import Footer from './Footer';
import WeatherDialog from './WeatherDialog';


function App() {
  const initialExpenses = sampledata

  const [expenses, setExpenses] = useState(initialExpenses)



  const handleExpenseAdd = (expenseData) => {
    setExpenses((prevExpenses) => {
      return ([...prevExpenses, expenseData])
    })
  }



  const handleRemove = (id) => {
    setExpenses(prevExpenses => {
      const updatedExpenses = prevExpenses.filter(expense => expense.id !== id);
      return updatedExpenses;
    });
  };




  return (
    <div className="App">
      <Header />
      <div>
        <WeatherDialog className='weathercontain' /></div>
      <ExpenseForm onExpenseAdd={handleExpenseAdd} />
      <ExpenseList onRemove={handleRemove} data={expenses} />
      <Footer />
    </div>

  );
}

export default App;
