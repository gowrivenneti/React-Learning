import React,{useState,useEffect,useRef} from "react";
function StopWatch() {
    const[time,setTime] = useState(0);
    const[isRunning,setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(()=>{
        if(isRunning){
            startTimeRef.current = Date.now() - time;
            intervalRef.current = setInterval(()=>{
                setTime(Date.now() - startTimeRef.current);
            },100);
        }  
        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[isRunning]);
    const handleStart = ()=>{
        setIsRunning(true);
    }
    const handleStop = ()=>{
        setIsRunning(false);
    }
    const handleReset = ()=>{
        setIsRunning(false);
        setTime(0);
    }
    const formatTime = (time)=>{
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return (
        <div className="stopwatch">
            <p className="time">{formatTime(time)}</p>
            <div className="buttons">
            <button className="btn-start" onClick={handleStart}>start</button>
            <button className="btn-stop" onClick={handleStop}>Stop</button>
            <button className="btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch;
