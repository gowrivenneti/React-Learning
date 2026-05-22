function Methods(){
    const fruits = [{id:1, name:'Apple',calories: 95}, 
        {id:2, name:'Banana',calories: 105}, 
        {id:3, name:'Cherry',calories: 50}, 
        {id:4, name:'Date',calories: 110}, 
        {id:5, name:'Elderberry',calories: 80}];

    const sortedFruits= fruits.sort((a, b) => a.name.localeCompare(b.name));
    const listItems = sortedFruits.map((fruit) => <li key={fruit.id}>{fruit.name} - {fruit.calories} calories</li>);
    const numbers = [1, 2, 3, 4, 5];
    const filteredNumbers = numbers.filter((number) => number % 2 === 0);
    const fN= filteredNumbers.map((number) => <li key={number}>{number}</li>);
    const findFruit = fruits.find((fruit) => fruit.calories > 100);
    numbers.push(6);
    numbers.pop();
    numbers.forEach((number) => console.log(number));
    const reducedValue = numbers.reduce((acc, number) => acc + number, 0);
    return(
        <div>
            <h1>Fruits</h1>
            <ol>
                {listItems}
            </ol>
            <h1>Filtered Numbers</h1>
            <ul>
                {fN}
            </ul>
            <p>Find Fruit: {findFruit ? `${findFruit.name} - ${findFruit.calories} calories` : 'Not found'}</p>
            <p>Reduced Value: {reducedValue}</p>
        </div>
    )
}
export default Methods;