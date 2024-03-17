import React, { useEffect, useState } from "react";
// import Button1 from "./Button1";
import "../components/css/Shoppingcart.css"

const Shoppingcart = (props) => {
    const [orderPlaced, setOrderPlaced] = useState(0);
    const cart = props.cart; 
    const productList = props.productList;

    const DisplayProduct = (idNo) => {
        return (
            <div className="cartItems">
                <div className="cartProdImg">
                    <img src={productList[idNo].src} alt="Buy" style={{ width: "50px", height: "40px" }} />
                </div>
                <div className="price">Rs {productList[idNo].price}</div>
                <div className="quantityBox">
                    Quantity: {cart[idNo]}
                    {/* <label htmlFor="quantity">Quantity: </label>
                    <input type="number" name="quantity" id="quantity" style={{ width: "50px" }} value={cart[idNo]}/> */}
                </div>
                <button onClick={() => {props.removeProduct(idNo)}} className="removeBtn">Remove</button>
                {/* <Button1 bgcolor="red" color="white" text="Remove" /> */}
            </div>
        );
    }

    const calculatePrice = () => {
        let total_price = 0;

        Object.keys(cart).forEach((idNo) => {
            total_price += (productList[idNo].price * cart[idNo])
        })

        return (total_price);
    }

    return (
        <>
        {(!orderPlaced) ? 
            <div className="cartBox">
                <h1>Checkout</h1>

                <hr></hr>
                
                {(cart["id1"]) ? DisplayProduct("id1") : ""}
                {(cart["id2"]) ? DisplayProduct("id2") : ""}
                {(cart["id3"]) ? DisplayProduct("id3") : ""}
                {(cart["id4"]) ? DisplayProduct("id4") : ""}
                {(cart["id5"]) ? DisplayProduct("id5") : ""}
                {(cart["id6"]) ? DisplayProduct("id6") : ""}
                {(cart["id7"]) ? DisplayProduct("id7") : ""}
                {(cart["id8"]) ? DisplayProduct("id8") : ""}
                {(cart["id9"]) ? DisplayProduct("id9") : ""}
                {(cart["id10"]) ? DisplayProduct("id10") : ""}
                {(cart["id11"]) ? DisplayProduct("id11") : ""}

                <div className="summary">
                    <div className="title"><h2>Order Summary</h2></div>
                    <div className="total">
                        Total Price: Rs {calculatePrice()}
                    </div>
                    <button onClick={() => {props.placeOrder(); setOrderPlaced(1)}} className="submitBtn">Proceed to Payment</button>
                    {/* <Button1 bgcolor="royalblue" color="white" text="Proceed to Payment" /> */}
                </div>

            </div>
            : 
            <div className="successBox">
                <div className="heading">
                    {/* <div className="tick"></div> */}
                    <h1>Success!</h1>
                </div>
                <div className="paymentDetail">
                    Your payment of was successful!
                </div>
            </div>
            }
        </>

    )
}

export default Shoppingcart