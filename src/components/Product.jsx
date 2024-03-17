import React from "react";
import "../components/css/Product.css"

const Product = (props) => {
    const product_info = props.product_info;
    return (
        <>
            <div className="viewBox" id="viewBox">

                <div className="title">
                    <h1>{product_info.title}</h1>
                </div>

                <div className="prodImg">
                    <img src={product_info.src} alt={product_info.title} />
                </div>

                <div className="desc">
                    <p>{product_info.desc}</p>
                </div>

                <div className="otherInfo">
                    <div className="price">{'Rs ' + product_info.price}</div>
                    <div className="disPrice">{'Rs ' + Math.round(parseInt(product_info.price) * 1.1 * 100) / 100}</div>
                    <div className="discount">
                        -10%
                    </div>
                    <div className="starBox">
                        <div className="count">0</div>
                        <div className="star"><img src="/assests/images/star.png" alt="Like" /></div>
                    </div>
                    <div className="add">
                        <button onClick={() => {props.addProduct();alert("Product added to cart!")}}>Add to Cart</button>
                    </div>
                </div>
                
                <div className="reviewBox">
                    <div className="title">
                        <h3>Product Reviews</h3>
                    </div>
                    <div className="review">
                        No reviews available for this product.
                    </div>
                </div>

            </div>
        </>

    );
}

export default Product