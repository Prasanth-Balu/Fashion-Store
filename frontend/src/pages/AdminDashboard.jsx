import React from "react";
import '../css/AdminDashboard.css'
import { Outlet, useLocation } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";

const AdminDashboard = () => {

    const location = useLocation();

    return (
        <section className="admin-dashboard">

            <AdminHeader />

            <main className="admin-dashboard-content">

                {location.pathname === "/admin" && (
                    <h1 id="admin-welcome-title">Welcome, Admin</h1>
                )}

                <Outlet />

            </main>

        </section>
    );
};

export default AdminDashboard;