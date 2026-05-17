import Profile from './assets/Screenshot 2025-06-16 145228.png'

function Card(){
    return(
        <div className="card">
        <img className="card-img" src={Profile} alt="profile-pic"/>
        <h3 className="card-text">Lucky</h3>
        <p className="card-p">My dog age is 15 years old.He is very innocent</p>
        </div>
    );
}
export default Card;