import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "../css/CategoryProducts.css";

const CategoryProducts = () => {

    const { category } = useParams();

    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await axios.get(
                    "http://localhost:5000/api/products"
                );
                const filteredProducts = response.data.products.filter(
                    (product) =>
                        product.category.toLowerCase() === category.toLowerCase()
                );

                setProducts(filteredProducts);

            } catch (error) {

                console.log(error);

            }

        };

        fetchProducts();

    }, [category]);


    return (
        <section className="category-products-page">

            <div className="category-products-heading">

                <h1>
                    {category} Products
                </h1>

                <p>
                    Explore our {category} collection
                </p>

            </div>


            <div className="category-products-list">

                {products.length > 0 ? (

                    products.map((product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                        />

                    ))

                ) : (

                    <p className="no-products">
                        No products found in this category.
                    </p>

                )}

            </div>

        </section>
    );
};

export default CategoryProducts;