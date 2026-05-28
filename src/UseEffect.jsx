import {useEffect,useState} from 'react';
function UseEffect(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Count has changed:', count);
        document.title = `Count: ${count}`;
    }, [count]);
    const addCount=()=>{
        setCount(count + 1);
    }
    return(
        <div>
            <h1>UseEffect</h1>
            <p>Count: {count}</p>
            <button onClick={addCount}>Increment</button>
        </div>
    )
}
export default UseEffect;