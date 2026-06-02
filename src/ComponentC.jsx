import propTypes from 'prop-types';
function ComponentC(props) {
  return (
    <div className="box-1">
      <h3>Component C</h3>
      <p>Bye, {props.user}!</p>
    </div>
  );
}
export default ComponentC;