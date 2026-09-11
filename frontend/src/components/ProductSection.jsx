import React, { useEffect, useState } from 'react'
import '../css/ProductSection.css'
import ProductCard from './ProductCard';
import axios from "axios";
const ProductSection = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response=await axios.get("https://fashion-store-backend-0yqd.onrender.com/api/products")
                setProducts(response.data.products)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    },[])
  return (
    <section className='product-section' id='products'>
        <div className="product-heading">
            <h1>Latest Product</h1>
            <p>Expolre our latest collection</p>
        </div>

        <div className='product-list'>
            {products.map((product) => (
                <ProductCard
                key={product._id}
                product={product}
                />
            ))}
        </div>
    </section>
  )
}

export default ProductSection
