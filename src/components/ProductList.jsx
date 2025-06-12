import React from "react";
import logo from '../logo.png';
import './ProductList.css';
import {useDispatch,useSelector,} from 'react-redux';
import { addItemToCart } from './CartSlice';
import ShoppingCart from './ShoppingCart';


function ProductList() {
  const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.cartItems);
const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

const flower = [
  {
    id: 1,
    name: "Snake Plant",
    image: require('../images/snakeplant.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 2,
    name: "Spider Plant",
    image: require('../images/spiderplant.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 3,
    name: "Aleovera",
    image: require('../images/aleovera.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 4,
    name: "Boston Fern",
    image: require('../images/bostonfern.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 5,
    name: "Peace Lily",
    image: require('../images/peacelily.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 6,
    name: "rubberplant",
    image: require('../images/rubberplant.jpg'),
    price: 250,
    quantity:1
  }
];

const fragflowers = [
  {
    id: 11,
    name: "Lavendar",
    image: require('../images/lavendar.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 12,
    name: "Jasmine",
    image: require('../images/jasmine.jpg'),
    price: 250,
    quantity:1
  },
  {
    id: 13,
    name: "Rosemary",
    image: require('../images/rosemary.jpg'),
    price: 250,
    quantity:1
  }
  
];

const handleAddToCart = (flower) => {
  dispatch(addItemToCart(flower));
};

const [showCart, setShowCart] = React.useState(false);

  const handleGetStarted = () => {
    setShowCart(true);
  };
  return (
    <div className="main">
      {showCart?(<><ShoppingCart goBack={() => setShowCart(false)}/></> ):(
      <>
      <header className="header">
        <div className="left">
          <img className="logo" src={logo} alt="logo of app" />
          <h3>Paradise Nursery<br />Make your own paradise!</h3>
        </div>
        <div className="right">
          <button className="btnlogo cart-button" onClick={handleGetStarted}>
                🛒
                {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
              </button>
        </div>
      </header>

      <div className="section">
  <h2 className="section-title">Air Purifying Plants</h2>

  <div className="card-container">
    {flower.map(flower => (
      <div key={flower.id} className="flower-card">
        <img src={flower.image} alt={flower.name} className="flower-img" />
        <h4 className="flower-name">{flower.name}</h4>
        <p className="price">{flower.price}</p>
        <button className="btn" onClick={() => handleAddToCart(flower)} disabled={cartItems.some(item => item.id === flower.id)}>
          {cartItems.some(item => item.id === flower.id) ? 'Added': 'Add To Cart'}
          </button>
      </div>
    ))}
  </div>

  <h2 className="section-title">Frangrance Plants</h2>
  <div className="card-container">
    {fragflowers.map(flowers => (
        <div key={flowers.id} className="flower-card">
            <img src={flowers.image} className="flower-img"/>
            <h4 className="flower-name">{flowers.name}</h4>
            <p className="price">{flowers.price}</p>
            <button 
            className="btn"
            onClick={()=> handleAddToCart(flowers)}
            disabled = {cartItems.some(item => item.id === flowers.id)}>
              {cartItems.some(item => item.id === flowers.id)?'Added':'Add to Cart'}</button>
        </div>
    ))
    }
</div>

</div>
</>
)}
    </div>
  );
}

export default ProductList;
