import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/AdminProductList.css";

const AdminProductList = () => {

    const [products, setProducts] = useState([]);

    const [editProduct, setEditProduct] = useState(null);


    const getProducts = async () => {

        try {

            const response = await axios.get(
                "https://fashion-store-backend-0yqd.onrender.com/api/products"
            );

            setProducts(response.data.products);

        } catch (error) {

            console.log(error);

        }

    };


    const deleteProduct = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `https://fashion-store-backend-0yqd.onrender.com/api/products/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            getProducts();

        } catch (error) {

            console.log(error);

        }

    };


    const updateProduct = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `https://fashion-store-backend-0yqd.onrender.com/api/products/${editProduct._id}`,
                {
                    name: editProduct.name,
                    description: editProduct.description,
                    price: editProduct.price,
                    category: editProduct.category
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setEditProduct(null);

            getProducts();

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        getProducts();

    }, []);


    return (
        <section className="admin-product-list">

            <h2 className="admin-product-list-title">
                Product List
            </h2>


            {products.length === 0 ? (

                <p className="admin-product-empty">
                    No products available
                </p>

            ) : (

                products.map((product) => (

                    <article
                        className="admin-product-card"
                        key={product._id}
                    >

                        <img
                            src={`https://fashion-store-backend-0yqd.onrender.com/uploads/${product.image}`}
                            alt={product.name}
                            className="admin-product-image"
                        />


                        <h3 className="admin-product-name">
                            {product.name}
                        </h3>


                        <p className="admin-product-category">
                            {product.category}
                        </p>


                        <p className="admin-product-price">
                            ₹{product.price}
                        </p>


                        <button
                            type="button"
                            className="admin-edit-btn"
                            onClick={() => setEditProduct(product)}
                        >
                            Edit
                        </button>


                        <button
                            type="button"
                            className="admin-delete-btn"
                            onClick={() => deleteProduct(product._id)}
                        >
                            Delete
                        </button>

                    </article>

                ))

            )}


            {editProduct && (

                <form
                    className="admin-edit-form"
                    onSubmit={updateProduct}
                >

                    <h2>
                        Edit Product
                    </h2>


                    <label>
                        Product Name
                    </label>

                    <input
                        type="text"
                        value={editProduct.name}
                        onChange={(e) =>
                            setEditProduct({
                                ...editProduct,
                                name: e.target.value
                            })
                        }
                    />


                    <label>
                        Description
                    </label>

                    <textarea
                        value={editProduct.description}
                        onChange={(e) =>
                            setEditProduct({
                                ...editProduct,
                                description: e.target.value
                            })
                        }
                    ></textarea>


                    <label>
                        Price
                    </label>

                    <input
                        type="number"
                        value={editProduct.price}
                        onChange={(e) =>
                            setEditProduct({
                                ...editProduct,
                                price: e.target.value
                            })
                        }
                    />


                    <label>
                        Category
                    </label>

                    <select
                        value={editProduct.category}
                        onChange={(e) =>
                            setEditProduct({
                                ...editProduct,
                                category: e.target.value
                            })
                        }
                    >

                        <option value="Men">
                            Men
                        </option>

                        <option value="Women">
                            Women
                        </option>

                        <option value="Kids">
                            Kids
                        </option>

                        <option value="Accessories">
                            Accessories
                        </option>

                    </select>


                    <button type="submit">
                        Update Product
                    </button>


                    <button
                        type="button"
                        onClick={() => setEditProduct(null)}
                    >
                        Cancel
                    </button>

                </form>

            )}

        </section>
    );
};

export default AdminProductList;
