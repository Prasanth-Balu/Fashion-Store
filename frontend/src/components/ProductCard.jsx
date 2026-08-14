import React from 'react'
import '../css/ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ product }) => {
    const navigate=useNavigate()

    const handleViewDetails =()=>{
        navigate(`/products/${product._id}`);
    }
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">
                    {product.category}
                </p>
                <p className="product-price">
                    ₹{product.price}
                </p>
                <button className="view-details-btn" onClick={handleViewDetails}>
                    View Details
                </button>
            </div>
        </div>
    )
}

export default ProductCard
