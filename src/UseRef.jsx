import React,{useState,useRef} from "react";
function UseRef(){
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    function handleClick1(){
        ref.current.focus();
        ref.current.style.backgroundColor = 'red';
        console.log(ref.current.value);
    }
    function handleClick2(){
        ref2.current.focus();
        ref2.current.style.backgroundColor = 'green';
        console.log(ref2.current.value);
    }
    function handleClick3(){
        ref3.current.focus();
        ref3.current.style.backgroundColor = 'blue';
        console.log(ref3.current.value);
    }
    return(
        <div>
            <h1>UseRef Example</h1>
            <input ref={ref} />
            <button onClick={handleClick1}>Click me</button><br />
            <input ref={ref2} />
            <button onClick={handleClick2}>Click me</button><br />
            <input ref={ref3} />
            <button onClick={handleClick3}>Click me</button>
        </div>
    )
}
export default UseRef;