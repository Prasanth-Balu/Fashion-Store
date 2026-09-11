import React, { useState } from "react";
import axios from "axios";
import "../css/AddProduct.css";

const AddProduct = () => {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null
    });


    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("name", formData.name);
            data.append("description", formData.description);
            data.append("price", formData.price);
            data.append("category", formData.category);
            data.append("image", formData.image);


            const token = localStorage.getItem("token");


            const response = await axios.post(
                "https://fashion-store-backend-0yqd.onrender.com/api/products",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );


            console.log(response.data);

            alert("Product added successfully");


            setFormData({
                name: "",
                description: "",
                price: "",
                category: "",
                image: null
            });


        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Failed to add product"
            );

        }

    };


    return (
        <form
            className="add-product-form"
            onSubmit={handleSubmit}
        >

            <h2>Add Product</h2>


            <label htmlFor="name">
                Product Name
            </label>

            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />


            <label htmlFor="description">
                Description
            </label>

            <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            ></textarea>


            <label htmlFor="price">
                Price
            </label>

            <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
            />


            <label htmlFor="category">
                Category
            </label>

            <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
            >

                <option value="">
                    Select Category
                </option>

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

            <label htmlFor="image">
                Product Image
            </label>

            <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
            />


            <button
                type="submit"
            >
                Add Product
            </button>

        </form>
    );
};

export default AddProduct;
