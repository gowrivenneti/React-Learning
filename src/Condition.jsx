import PropTypes from 'prop-types';

Condition.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
};
Condition.defaultProps = {
    isLoggedIn: false,
    name: "Guest"
};

function Condition(Props){
    const welcome= <h1 className="welcome">Welcome back ! {Props.name}</h1>;
    const login= <h1 className="login">Please sign up.</h1>;
    return(
        <div className="condition">
            {Props.isLoggedIn ? welcome : login}
        </div>
    );
}
export default Condition;