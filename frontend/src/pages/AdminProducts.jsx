import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/AdminProducts.css'
import AddProduct from "../components/AddProduct";
import AdminProductList from "../components/AdminProductList";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);


    const getProducts = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/products"
            );

            setProducts(response.data.products);

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        getProducts();

    }, []);


    return (
        <section className="admin-products">

            <h1 className="admin-products-title">
                Products
            </h1>

            <p>
                Total Products: {products.length}
            </p>


            <AddProduct />

            <AdminProductList />

        </section>
    );
};

export default AdminProducts;