import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/Delivery.css'
const Delivery = () => {
    const navigate = useNavigate();
    const [deliveryAddress, setDeliveryAddress] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeliveryAddress({
            ...deliveryAddress,
            [name]: value
        })
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token')
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

            if (!token) {
                navigate('/login')
                return;
            }

            if (cartItems.length === 0) {
                alert("Your Cart is Empty")
                navigate("/cart")
                return;
            }

            const items = cartItems.map((item) => ({
                product: item.product,
                quantity: item.quantity,
                price: item.price
            }))

            const response = await axios.post("http://localhost:5000/api/orders",
                {
                    items,
                    deliveryAddress
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                localStorage.removeItem('cartItems');
                alert('Order Placed Successfully');
                navigate("/")
            }
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Failed to place order");
            }
        }
    }
    return (
        <section className='delivery-page'>
            <div className="delivery-container">
                <h1>Delivery Information</h1>
                <p className="delivery-subtitle">
                    Enter your delivery details to place the order.
                </p>
                <form
                    className="delivery-form"
                    onSubmit={handlePlaceOrder}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={deliveryAddress.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={deliveryAddress.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />

                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={deliveryAddress.address}
                        onChange={handleChange}
                        placeholder="Enter your full address"
                        rows="4"
                        required
                    />

                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={deliveryAddress.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        required
                    />

                    <label htmlFor="pincode">Pincode</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={deliveryAddress.pincode}
                        onChange={handleChange}
                        placeholder="Enter your pincode"
                        required
                    />

                    <button
                        type="submit"
                        className="confirm-order-btn"
                    >
                        Confirm Order
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Delivery
