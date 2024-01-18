import Balance from "./Components/Balance"
import Header from "./Components/Header"
import IncomeExpenses from "./Components/IncomeExpenses"
import TransactionList from "./Components/TransactionList"
import AddTransaction from "./Components/AddTransaction"
import { GlobalProvider } from "./Context/GlobalState"
import './CSS/App.css'

function App() {
  return (
    <GlobalProvider>
        <Header/>
      <div className="container">
        <div id="cont1">
          <Balance/>
          <IncomeExpenses/>
          <AddTransaction/>
        </div>
        <div id="cont2">
          <TransactionList/>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
