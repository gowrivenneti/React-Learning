import PropTypes from "prop-types";
function ListExample(props){
    const category=props.category;
    const items=props.items;
    const ListItems=items.map((item)=><li key={item.id}>{item.name} :{item.calories}</li>);
    return(
        <div>
            <h2 className="category-title">List of {category}</h2>
            <ul className="item-list">
                {ListItems}
            </ul>
        </div>
    )
}
ListExample.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number
    })).isRequired
};
export default ListExample;