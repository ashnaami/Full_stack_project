// Home.jsx

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Home.css'

function Home() {

  const [products, setProducts] = useState([])
  const [id, setId] = useState("")

  // Fetch Products

  const getProducts = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/product_list/",{
           method: "GET"
        }
      )

      const data = await response.json()

      setProducts(data)

    } catch (error) {

      console.log(error)
      alert("Error fetching products")

    }

  }

const deleteProducts = async(id) => {
    const confirmDelete = window.confirm("Are you sure, u want delete")
    if(! confirmDelete){
      return
    }
    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/delete_products/{id}",
        productdata
      )

      alert("delete")

      setName("")
      setPrice("")
      setQnty("")

    } catch (error) {

      console.log(error)
      alert("Failed to add product")

    }
}
    useEffect(() => {
    getProducts()
    }, [])
  

  // Run when page loads

  useEffect(() => {

    getProducts()

  }, [])

  return (

    <div className="home">

      {/* Navbar */}

      <nav className="navbar">

        <h1 className="logo">
          SweetBites
        </h1>

        <ul className="nav-links">

          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/addcake">
              Add Cake
            </Link>
          </li>

          <li>About</li>
          <li>Contact</li>

        </ul>

        <button className="cart-btn">
          Cart
        </button>

      </nav>

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-text">

          <h1>
            Fresh & Delicious
            <span> Cakes For Every Celebration</span>
          </h1>

          <p>
            Order premium quality cakes made with love,
            fresh ingredients, and beautiful decorations.
          </p>

          <button className="order-btn">
            Order Now
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop"
            alt="Cake"
          />

        </div>

      </section>

      {/* Cakes Section */}

      <section className="cakes-section">

        <h2>
          Our Delicious Cakes
        </h2>

        <div className="cake-container">

          {products.map((product) => (

            <div
              className="cake-card"
              key={product.id}
            >

              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop"
                alt={product.pro_name}
              />

              <div className="cake-content">

                <h3>
                  {product.pro_name}
                </h3>

                <p className="price">
                  ₹ {product.pro_price}
                </p>

                <p>
                  Quantity: {product.pro_qauntity}
                </p>

                <div className="cake-buttons">

                <Link to="/editpro">
               <button>Edit</button> 
                </Link>
              <br />

                <button onClick={()=> deleteProducts(product.id)}>Delete</button>


              </div>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <p>
          © 2026 SweetBites Cake Shop
        </p>

      </footer>

    </div>

  )

}

export default Home