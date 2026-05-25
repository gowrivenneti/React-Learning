import React,{ useState } from 'react';
function UpdaterFunction(){
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count=>count + 1);
        setCount(count=>count + 1);
        setCount(count=>count + 1);
    }; 
    const Decrement = () => {
        setCount(count=>count - 1);
        setCount(count=>count - 1);
        setCount(count=>count - 1);
    };  
    const Reset = () => {
        setCount(0);
    }
    return(
        <div className='updater-function'>
            <h1>Updater Function Example</h1>
            <h1 className='counter-title'>Count: {count}</h1>
            <button className='button-counter' onClick={Increment}>Increment Count</button>
            <button className='button-counter' onClick={Decrement}>Decrement Count</button>
            <button className='button-counter' onClick={Reset}>Reset Count</button>
            
        </div>
    );
}
export default UpdaterFunction;