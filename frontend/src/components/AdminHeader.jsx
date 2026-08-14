import React from "react";
import '../css/AdminHeader.css'
import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (
        <header className="admin-header">

            <div className="admin-header-container">

                <Link
                    to="/admin/products"
                    className="admin-logo"
                >
                    FASHION ADMIN
                </Link>

                <nav className="admin-nav">

                    <Link
                        to="/admin/products"
                        className="admin-nav-link"
                    >
                        Products
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="admin-nav-link"
                    >
                        Orders
                    </Link>

                </nav>

                <button
                    type="button"
                    className="admin-logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </header>
    );
};

export default AdminHeader;