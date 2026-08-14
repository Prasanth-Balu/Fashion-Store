import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Categories.css'

const Categories = () => {

  const navigate = useNavigate()

  return (
    <section className="Categories">

      <div className='section-heading'>
        <h2>Shop by Category</h2>
        <p>Explore our Collection</p>
      </div>

      <div className="category-list">

        <div
          className="category-card"
          onClick={() => navigate("/categories/men")}
        >
          <h3>Men</h3>
          <p>Explore Men's Fashion</p>
        </div>


        <div
          className="category-card"
          onClick={() => navigate("/categories/women")}
        >
          <h3>Women</h3>
          <p>Explore Women's Fashion</p>
        </div>


        <div
          className="category-card"
          onClick={() => navigate("/categories/kids")}
        >
          <h3>Kids</h3>
          <p>Explore Kids Fashion</p>
        </div>


        <div
          className="category-card"
          onClick={() => navigate("/categories/accessories")}
        >
          <h3>Accessories</h3>
          <p>Complete Your Look</p>
        </div>

      </div>

    </section>
  )
}

export default Categories