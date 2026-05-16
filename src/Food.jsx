function Food(){
    const food1="Chicken";
    const food2="Bread";
    return(
        <div>
            <h2>Food</h2>
            <ul>
                <li>Apples</li>
                <li>Bananas</li>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}
export default Food;