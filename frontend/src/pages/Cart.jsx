import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Cart.css'
const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCart)
    }, [])


    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) =>
            item.product === productId
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        );

        setCartItems(updatedCart);

        localStorage.setItem(
            "cartItems",
            JSON.stringify(updatedCart)
        );
    };


    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) =>
            item.product === productId
                ? {
                    ...item,
                    quantity: item.quantity - 1
                }
                : item
        ).filter((item) => item.quantity > 0);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };


    const removeItem = (productId) => {
        const updatedCart = cartItems.filter(
            (item) => item.product !== productId
        );

        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };


    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0);


    if (cartItems.length === 0) {
        return (
            <section className="cart-page">
                <div className="empty-cart">
                    <h1>Your Cart is Empty</h1>
                    <p>Add some products to your cart.</p>

                    <button
                        onClick={() => navigate("/")}
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>
        );
    }

    const handlePlaceOrder = () => {
            navigate("/delivery");
    };

    return (
        <section className="cart-page">
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.product}>
                                <div className="cart-item-image">
                                    <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} />
                                </div>

                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p> ₹{item.price}</p>
                                    <div className="cart-quantity">
                                        <button
                                            onClick={() => {
                                                decreaseQuantity(item.product)
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.product)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeItem(item.product)}>
                                        Remove
                                    </button>
                                </div>
                                <div className="cart-item-total">
                                    ₹{item.price * item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Items</span>
                            <span>
                                {cartItems.reduce(
                                    (total, item) => total + item.quantity, 0
                                )}
                            </span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>₹{totalAmount}</span>
                        </div>

                        <button className="place-order-btn"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
