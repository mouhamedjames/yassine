import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function App() {

  const counter =useSelector((state)=>state.counter )
  const dispatch=useDispatch()
  const increment=()=>{
    dispatch({type:'INC'})
  }
  const decrement=()=>{
    dispatch({type:'DE'})
  }
  const Ader=()=>{
    dispatch({type:'AD',payload:10})
  }
  return (
    <div className="App">
      <header className="App-header">
      <p>counter</p> 
      <p>{counter}</p>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={Ader}>ADD 10</button>
      </header>
    </div>
  );
}

export default App;
