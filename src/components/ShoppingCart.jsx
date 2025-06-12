import react from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeItemFromCart,clearcart,increaseItemQuantity,decreaseItemQuantity } from "./CartSlice";
import './ShoppingCart.css';

const Shoppingcart = ({goBack}) =>{
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

    const handleRemoveItem = itemId =>{
        dispatch(removeItemFromCart(itemId));
    };

    const handleClearCart = () =>{
        dispatch(clearcart());
    };

    const handleIncreaseQuantity = itemId =>{
        dispatch(increaseItemQuantity(itemId));
    };

    const handleDecreaseQuantity = itemId =>{
        dispatch(decreaseItemQuantity(itemId));
    };
    return(
        <div className="main">
        <div className="shopping-cart">
                <h2 className="shopping-cart-title">Shopping Cart</h2>
                <div><p className="price">Total Amount:{totalAmount}</p></div>
                <div className="container">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src= {item.image} className="flower-img"/>
                      <h4 className="item-name">{item.name}</h4>
                      <p className="price">{item.price}</p>
                      <div className="quantity-controls">
                        <button className="btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                        <p className="price">{item.quantity}</p> 
                        <button className="btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                      </div>
                      <button className="btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                  ))}
                </div>
                <button className="btn" onClick={handleClearCart}>Clear Cart</button>
                <button className="btn" onClick={goBack}>Continue Shopping</button>
                
              </div>
              <button className="btn" >Checkout</button>
        
        </div>
    )
};
export default Shoppingcart;