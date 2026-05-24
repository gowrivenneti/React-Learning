import React, {useState} from 'react';
function OnChange(){
    const [name, setName] = useState("Guest");
    const [comment, setComment] = useState("");
    const [count, setCount] = useState(0);
    const [selectPayment, setSelectPayment] = useState("");
    const [shipping,setShipping] = useState("");
    const handleChange=(event)=>{
        setName(event.target.value);
    }
    const handleCommentChange=(event)=>{
        setComment(event.target.value);
    }
    const handleCountChange=(event)=>{
        setCount(event.target.value);
    }
    const handlePaymentChange=(event)=>{
        setSelectPayment(event.target.value);
    }
    const handleShippingChange=(event)=>{
        setShipping(event.target.value);
    }
    return(<div className='onchange'>
        <h1>OnChange Event Example</h1>
        <div className="name-input">
        <input className="form-control" value={name} onChange={handleChange} placeholder="Enter your name" />
        <p>Welcome, {name}!</p>
        </div>
        <div className="count-input">
        <input type="number" className="form-control" value={count} onChange={handleCountChange} placeholder="Enter a number" />
        <p>Count: {count}</p>
        </div>
         <div className="comment-input">
        <textarea className="form-control" value={comment} onChange={handleCommentChange} placeholder="Enter your comment" />
        <p>Your comment: {comment}</p>
        </div>
        <div className="selection">
            <select className="form-control" value={selectPayment} onChange={handlePaymentChange}>
                <option value="">Select your payment method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
            </select>
            <p>Selected Payment Method: {selectPayment}</p>
        </div>
        <div className="shipping">
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange} />
                Pick up
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Selected Shipping: {shipping}</p>
        </div>
    </div>)
}
export default OnChange;