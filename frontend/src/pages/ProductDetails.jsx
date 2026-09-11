import React, { useEffect, useState } from 'react'
import '../css/ProductDetails.css'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
const ProductDetails = () => {
    const { id } = useParams()

    const navigate = useNavigate();

    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];

        const existingProduct = existingCart.find((item) => item.product === product._id);
        let updatedCart;
        if (existingProduct) {
            updatedCart = existingCart.map((item) =>
                item.product === product._id ? { ...item, quantity: item.quantity + quantity } : item
            );
        }
        else {
            updatedCart = [
                ...existingCart,
                {
                    product: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                }
            ]
        }

        localStorage.setItem("cartItems",JSON.stringify(updatedCart));
        navigate('/cart')
        console.log("Product added to cart")

    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fashion-store-backend-0yqd.onrender.com/api/products/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct();
    }, [id]);
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    if (!product) {
        return <p>Loading...</p>
    }
    return (
        <section className="product-details">
            <div className="product-details-container">
                <div className="product-details-image">
                    <img
                        src={`https://fashion-store-backend-0yqd.onrender.com/uploads/${product.image}`}
                        alt={product.name}
                    />
                </div>




                <div className="product-details-info">
                    <h1>{product.name}</h1>
                    <p className="details-category">{product.category}</p>
                    <p className="details-price">₹{product.price}</p>
                    <p className="details-description">{product.description}</p>


                    <div className="quantity-section">
                        <span>Quantity</span>
                        <div className="quantity-control">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>

                    <button className="add-cart-btn" onClick={handleAddToCart}> Add to Cart </button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
