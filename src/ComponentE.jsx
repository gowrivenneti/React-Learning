import {useContext} from 'react';
import {UserContext} from './ComponentD.jsx';
function ComponentE(){
    const user = useContext(UserContext);
    return(
        <div className="box-1">
            <h3>Component E</h3>
            <p>Bye, {user}!</p>
        </div>
    );
}
export default ComponentE;