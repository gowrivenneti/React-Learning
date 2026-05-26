import React,{ useState } from 'react';
function UpdateObjects() {
    const [car,setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964
    });
    const updateYear = (e) => {
        setCar( {...car, year:e.target.value}
        );
    };
    const updateModel = (e ) => {
        setCar({...car, model: e.target.value});
    };
    const updateBrand = (e) => {
        setCar({...car, brand: e.target.value}
        );
    };
    return (
        <div>
            <h1>Update Objects Example</h1>
            <h1 className='counter-title'>Brand: {car.brand}</h1>
            <h1 className='counter-title'>Model: {car.model}</h1>
            <h1 className='counter-title'>Year: {car.year}</h1>
            <input type="number" value={car.year} className='button-counter' onChange={updateYear} placeholder="Update Year" />
            <input type="text" value={car.model} className='button-counter' onChange={updateModel} placeholder="Update Model" />
            <input type="text" value={car.brand} className='button-counter' onChange={updateBrand} placeholder="Update Brand" />
        </div>
    );
}
export default UpdateObjects;