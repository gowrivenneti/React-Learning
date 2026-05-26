import React,{ useState } from 'react';
function UpdateArray() {
    const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);
    const handleAddFood = (e) => {
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";
        setFoods(f=>[...f, newFood]);
    };
    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    };
    return(
        <div className="update-array-container">
            <h1 className="update-array-title">Update Array Example</h1>
            <h3 className="update-array-subtitle">List of Foods</h3>
            <ol className="food-list">
                {foods.map((food, index) => (
                    <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>
                ))}
            </ol>
            <input type="text" id="food-input" placeholder="Enter the Food" className="food-input" />
            <button onClick={handleAddFood} className="add-food-button">
                Add Food
            </button>
        </div>
    );
}
export default UpdateArray;