import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("token") ? true : false
    );

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(token ? true : false);

        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartCount(cartItems.length);
    }, [location]);

    const handleProductsClick = () => {
        navigate("/");
        setTimeout(() => {
            const productsSection = document.getElementById("products");
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo" onClick={() => navigate("/")}>
                    <span>FASHION</span>
                    <small>STORE</small>
                </div>

                <nav className="nav">
                    <Link to="/">Home</Link>
                    <button className="products-link" onClick={handleProductsClick}>
                        Products
                    </button>
                    <div className="category-menu">
                        <button className="category-btn">
                            Categories <span></span>
                        </button>
                        <div className="category-dropdown">
                            <Link to="/categories/men">Men</Link>
                            <Link to="/categories/women">Women</Link>
                            <Link to="/categories/kids">Kids</Link>
                            <Link to="/categories/accessories">Accessories</Link>
                        </div>
                    </div>
                </nav>

                <div className="header-actions">
                    {isLoggedIn ? (
                        <div className="profile-menu">
                            <button className="profile-btn">Profile</button>
                            <div className="profile-dropdown">
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="login-btn">Login</Link>
                            <Link to="/register" className="register-btn">Register</Link>
                        </>
                    )}

                    <Link to="/cart" className="cart-btn">
                        Cart
                        {cartCount > 0 && <span className="cart-dot"></span>}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;