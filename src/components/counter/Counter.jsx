import {useState} from 'react'; 
import './CounterStyle.css';


export const Counter = () => {

  
    const reset = () => {
      setCount(0);
    }

   const [Count, setCount] = useState(0);
    return ( 

    <div className="counter"> 
    <header className='title'>COUNTER INCREMENT/DECREMENT</header>
    <h1 >Counter: {Count}</h1>
      
       <button className = "Decrement"
     onClick={() =>
      setCount(Count - 1)}>Decrement</button>
     
     <button className= "Increment"
     onClick={() => setCount(Count + 1)}>Increment
     </button>
    
     <button className = "Reset"
       onClick={reset}>Reset</button>
       </div> )
       
      
      }

