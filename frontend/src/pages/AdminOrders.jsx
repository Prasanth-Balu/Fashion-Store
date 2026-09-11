import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/AdminOrders.css'
const AdminOrders = () => {

    const [orders, setOrders] = useState([]);


    const getOrders = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "https://fashion-store-backend-0yqd.onrender.com/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setOrders(response.data.orders);

        } catch (error) {

            console.log(error);

        }
    };


    const updateStatus = async (id, status) => {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `https://fashion-store-backend-0yqd.onrender.com/api/orders/${id}/status`,
                {
                    status: status
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getOrders();

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {

        getOrders();

    }, []);


    return (
        <section className="admin-orders">

            <h1 className="admin-orders-title">
                Orders
            </h1>


            {orders.length === 0 ? (

                <p>
                    No orders available
                </p>

            ) : (

                orders.map((order) => (

                    <article
                        className="admin-order-card"
                        key={order._id}
                    >

                        <h3>
                            Order ID: {order._id}
                        </h3>


                        <p>
                            Total: ₹{order.totalAmount}
                        </p>


                        <p>
                            Customer Name: {order.deliveryAddress.name}
                        </p>


                        <p>
                            Phone: {order.deliveryAddress.phone}
                        </p>


                        <p>
                            Address: {order.deliveryAddress.address}
                        </p>


                        <p>
                            Current Status: {order.status}
                        </p>


                        <select
                            value={order.status}
                            onChange={(e) =>
                                updateStatus(
                                    order._id,
                                    e.target.value
                                )
                            }
                        >

                            <option value="Placed">
                                Placed
                            </option>

                            <option value="Processing">
                                Processing
                            </option>

                            <option value="Shipped">
                                Shipped
                            </option>

                            <option value="Delivered">
                                Delivered
                            </option>

                            <option value="Cancelled">
                                Cancelled
                            </option>

                        </select>

                    </article>

                ))

            )}

        </section>
    );
};

export default AdminOrders;
