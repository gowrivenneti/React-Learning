import React,{useState} from 'react';
function UpdateObjInArr() {
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const handleAddCar = () => {
        const newCar = { year, model, color };
        setCars(c=>[...c, newCar]);
        setYear(new Date().getFullYear());
        setModel("");
        setColor("");
    }
    const handleRemoveCar = (index) => {
        setCars(c=>c.filter((_, i) => i !== index));
    }
    const handleYearChange = (e) => {
        setYear(e.target.value);
    }
    const handleModelChange = (e) => {
        setModel(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    return(<div className="update-arr-in-obj-container">
        <h1 className="update-arr-in-obj-title">Update Array in Object Example</h1>
        <h3 className="update-arr-in-obj-subtitle">List of Cars</h3>
        <ol className="update-arr-in-obj-list">
            {cars.map((car,index)=>
            <li onClick={()=>handleRemoveCar(index)} key={index}>{car.year} {car.model} {car.color}</li>)}
        </ol>
        <input className="form-control" type="number" value={year} onChange={handleYearChange} placeholder="Enter the Year" /><br/>
        <input className="form-control" type="text" value={model} onChange={handleModelChange} placeholder="Enter the Model" /><br/>
        <input className="form-control" type="text" value={color} onChange={handleColorChange} placeholder="Enter the Color" /><br/>
        <button className="btn btn-primary" onClick={handleAddCar}>Add Car</button>
    </div>)
}
export default UpdateObjInArr;