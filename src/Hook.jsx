import React, { useState } from "react";
function Hook(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const updateName=()=>{
        setName("Lucky");
    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const updateCount=()=>{
        setCount(count+1);
    }
    const toggleLogin=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <div>
           <p>Welcome,{name}</p>
            <button onClick={updateName}>Update Name</button>
            <p>Age:{age}</p>
            <button onClick={updateAge}>Update Age</button>
            <p>Count:{count}</p>
            <button onClick={updateCount}>Update Count</button>
            <p>IsLoggedIn: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
            <button onClick={toggleLogin}>Toggle Login</button>
        </div>
    )
}
export default Hook;