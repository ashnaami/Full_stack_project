import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function AddCake() {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQnty] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    const productdata = {
      pro_name: name,
      pro_price: price,
      pro_qauntity: quantity
    }

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/add_pro/",
        productdata
      )

      alert("Successfully added")

      setName("")
      setPrice("")
      setQnty("")

    } catch (error) {

      console.log(error)
      alert("Failed to add product")

    }

  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#fff5f7",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Navbar */}

      <nav
        style={{
          width: "100%",
          padding: "18px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >

        <h1
          style={{
            color: "#ff4d6d",
            fontSize: "30px",
          }}
        >
          SweetBites
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#333",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>

          <Link
            to="/addcake"
            style={{
              textDecoration: "none",
              color: "#ff4d6d",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Add Cake
          </Link>

        </div>

      </nav>

      {/* Form Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
        }}
      >

        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "20px",
            width: "380px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >

          <h2
            style={{
              textAlign: "center",
              color: "#ff4d6d",
              marginBottom: "10px",
            }}
          >
            Add New Cake
          </h2>

          {/* Cake Name */}

          <div>

            <label
              style={{
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Cake Name
            </label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter cake name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "15px",
              }}
            />

          </div>

          {/* Price */}

          <div>

            <label
              style={{
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Price
            </label>

            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Enter price"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "15px",
              }}
            />

          </div>

          {/* Quantity */}

          <div>

            <label
              style={{
                fontWeight: "bold",
                color: "#444",
              }}
            >
              Quantity
            </label>

            <input
              type="number"
              name="qnty"
              value={quantity}
              onChange={(e) => setQnty(e.target.value)}
              required
              placeholder="Enter quantity"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
                fontSize: "15px",
              }}
            />

          </div>

          {/* Submit Button */}

          <input
            type="submit"
            value="Add Cake"
            style={{
              padding: "14px",
              background: "#ff4d6d",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          />

        </form>

      </div>

    </div>

  )

}

export default AddCake