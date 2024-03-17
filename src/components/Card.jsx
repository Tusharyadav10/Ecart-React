import React from "react"
import "./css/Card.css"

const Card = (props) => {
    const productList = props.productList;

    return (
        <>
            <div className="card">
                <div className="imgBox">
                    <img src={productList[props.idNo].src} alt="Buy" />
                </div>
                <div className="info">
                    <h4>{productList[(props.idNo)].title}</h4>
                    <p>Rs {productList[(props.idNo)].price}</p>
                    <a>
                        <button onClick={props.changeView}>View product</button>
                    </a>
                </div>

            </div>

        </>
    );
};

export default Card;