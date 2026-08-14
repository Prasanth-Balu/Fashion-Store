import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductSection from '../components/ProductSection'
const Home = () => {
  return (
    <main className="home">
        <Hero/>
        <Categories/>
        <ProductSection/>
    </main>
  )
}

export default Home
