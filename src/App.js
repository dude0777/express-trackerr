import Header from './Header';
import './App.css';
import sampledata from './sample-data.json'
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import Footer from './Footer';
function App() {


  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseList data={sampledata} />
      <Footer />
    </div>

  );
}

export default App;
