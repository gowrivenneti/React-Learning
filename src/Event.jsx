function Event(){
    const handleClick=()=>{
        console.log("I was clicked");
    }
    const handleMouseOver=(name)=>{
        console.log(`Mouse over ${name}`);
    }
    const count=0;
    const handleIncrement=(count)=>{
        if(count<3){
            count++;
            console.log(count);
        }
        else{
            console.log("Count cannot be incremented further");
        }
    }
    return(
        <div>
            <button onClick={handleClick} onMouseOver={() => handleMouseOver("Button")}>
                Click me
            </button>
            <button onClick={() => handleIncrement(count)}>
                Count
            </button>
        </div>
    )
}
export default Event;