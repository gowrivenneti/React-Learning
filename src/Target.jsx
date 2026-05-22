function Target() {
    const handleClick = (e) => {
        e.target.textContent = "Clicked" ;
    }
    return (
        <div>
            <h1>Target</h1>
            <button onClick={(e) => handleClick(e)}>
                Click me
            </button>
        </div>
    )
}
export default Target;