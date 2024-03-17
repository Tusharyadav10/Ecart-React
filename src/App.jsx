import { useState } from "react"
import Navbar from "./components/Navbar"
import Holding from "./components/Holding"
import Card from "./components/Card"
import Product from "./components/Product"
import Shoppingcart from "./components/Cart"
import "./App.css"

function App() {
  // viewMode = 0 for home, =1 for product, =2 for cart
  const [viewMode, setViewMode] = useState(0);
  const [viewProduct, setViewProduct] = useState("id1");

  const [productList, setProductList] = useState(
    {
      "id1": {"title": "Black Digital Watch", "price": 2499, "discount": 5, "src": "/assests/images/9-watch-black.jpg", "desc": "A hi-end digital watch that can answer calls, save notes and track your training."},
      "id2": {"title": "Blue Shoes", "price": 999, "discount": 10, "src": "/assests/images/18-shoes-blue.jpg", "desc": "A pair of stylish blue suede shoes for both formal and casual occasions."},
      "id3": {"title": "Wireless Earbuds", "price": 1199, "discount": 8, "src": "/assests/images/17-wireless-earbuds.jpg", "desc": "High-quality wireless earbuds with noise-cancellation and long battery life."},
      "id4": {"title": "Gold Glasses", "price": 999, "discount": 5, "src": "/assests/images/6-glasses-gold.jpg", "desc": "Stylish pair of sunglasses that feature a gold trim."},
      "id5": {"title": "C Programming Language", "price": 400, "discount": 10, "src": "/assests/images/book1.jpg", "desc": "Good book for C programmers."},
      "id6": {"title": "Operating System Concepts", "price": 800, "discount": 15, "src": "/assests/images/book2.jpg", "desc": "Quality book on Operating System."},
      "id7": {"title": "Computer System Architecture", "price": 700, "discount": 5, "src": "/assests/images/book3.jpg", "desc": "Concise book on Coa."},
      "id8": {"title": "Database Concepts", "price": 900, "discount": 20, "src": "/assests/images/book4.jpg", "desc": "Contains DBMS concepts with SQL."},
      "id9": {"title": "Wireless Keyboard", "price": 400, "discount": 5, "src": "/assests/images/13-wireless-keyboard.jpg", "desc": "High-performance wireless keyboard."},
      "id10": {"title": "Gaming Mouse", "price": 499, "discount": 25, "src": "/assests/images/19-gaming-mouse.jpg", "desc": "High-performance gaming mouse."},
      "id11": {"title": "External Hard Drive", "price": 4999, "discount": 5, "src": "/assests/images/20-external-hard-drive.jpg", "desc": "Large-capacity external hard disk with usb 3.0 interface for fast data transfer."},
    }
  )
  const [cart, setCart] = useState(
    {
      "id1": 0, "id2": 0, "id3": 0, "id4":0,"id5": 0, "id6": 0, "id7": 0, "id8":0,"id9": 0, "id10": 0, "id11": 0,
    }
  )

  const changeView = (mode, idNo) => {
    setViewMode(mode);
    setViewProduct(idNo);
  }

  const addProduct = (idNo) => {
    let temp = {...cart};
    temp[idNo] += 1;
    setCart(temp);
    // console.log(cart);
  }

  const removeProduct = (idNo) => {
    let temp = {...cart};
    temp[idNo] = 0;
    setCart(temp);
  }

  const placeOrder = () => {
    let temp = {...cart};
    Object.keys(temp).forEach((key) => {
      temp[key] = 0;
    });
    setCart(temp);
  }

  return (
    <>

      <Navbar changeViewToHome={() => {changeView(0)}} changeViewToCart={() => {changeView(2)}} />

      {(viewMode==0) ? 
        <div className="container">
          <Holding /> 
          <h1 style={{marginTop: "20px", fontSize: "xx-large"}}>View All Products</h1>
          <div className="containerProductList">
            <Card idNo="id1" productList={productList} changeView={() => {changeView(1, "id1")}} />
            <Card idNo="id2" productList={productList} changeView={() => {changeView(1, "id2")}} />
            <Card idNo="id3" productList={productList} changeView={() => {changeView(1, "id3")}} />
            <Card idNo="id4" productList={productList} changeView={() => {changeView(1, "id4")}} />
            <Card idNo="id5" productList={productList} changeView={() => {changeView(1, "id5")}} />
            <Card idNo="id6" productList={productList} changeView={() => {changeView(1, "id6")}} />
            <Card idNo="id7" productList={productList} changeView={() => {changeView(1, "id7")}} />
            <Card idNo="id8" productList={productList} changeView={() => {changeView(1, "id8")}} />
            <Card idNo="id9" productList={productList} changeView={() => {changeView(1, "id9")}} />
            <Card idNo="id10" productList={productList} changeView={() => {changeView(1, "id10")}} />
            <Card idNo="id11" productList={productList} changeView={() => {changeView(1, "id11")}} />
          </div>
        </div>
      : (viewMode==1) ? 
        <div className="containerProduct">
          <Product product_info={productList[viewProduct]} addProduct={() => {addProduct(viewProduct)}}/>
        </div> 
      : 
        <div className="containerCart">
          <Shoppingcart cart={cart} removeProduct={removeProduct} placeOrder={placeOrder} productList={productList}/>
        </div>
      }

    </>
  );
}

export default App