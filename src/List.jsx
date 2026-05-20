function List(){
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const listItems = fruits.map((fruit) => <li>{fruit}</li>);
    return(
        <ul>
            {listItems}
        </ul>
    );
}
export default List;
