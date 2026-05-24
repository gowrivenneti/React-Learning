import React, { useState } from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    return(
        <div className='counter'>
            <h1 className='counter-title'>Counter: {count}</h1>
            <button className='button-counter' onClick={decrement}>
                Decrement
            </button>
            <button className='button-counter' onClick={reset}>
                Reset
            </button>
            <button className='button-counter' onClick={increment}>
                Increment
            </button>
        </div>
    )
}
export default Counter;