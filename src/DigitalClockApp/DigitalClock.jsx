import React,{useState,useEffect} from 'react';
function DigitalClock(){
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000);
        return () => clearInterval(timer);
    },[]);
    function formatTime(){
        const hours = time.getHours().toString().padStart(2,'0');
        const minutes = time.getMinutes().toString().padStart(2,'0');
        const seconds = time.getSeconds().toString().padStart(2,'0');
        const period = hours >= 12 ? "PM" : "AM";
        return `${hours}:${minutes}:${seconds} ${period}`;
    }
    return (
        <div>
            <h1>Digital Clock</h1>
            <p>{formatTime()}</p>
        </div>
    );

}
export default DigitalClock;
