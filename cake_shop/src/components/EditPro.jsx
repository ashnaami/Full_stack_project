import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function EditPro() {

  const[productId, setProductId] = useState(1)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQnty] = useState("")

  // Get Single Product

  const getSingleProduct = async () => {

    try {

      const response = await axios.get(
        `http://127.0.0.1:8000/api/product_detail/${productId}/`
      )

      const data = response.data

      setName(data.pro_name)
      setPrice(data.pro_price)
      setQnty(data.pro_qauntity)

    } catch (error) {

      console.log(error)
      alert("Error fetching product")

    }

  }

  // Update Product

  const handleUpdate = async (e) => {

    e.preventDefault()

    if (
      name === "" ||
      price === "" ||
      quantity === ""
    ) {

      alert("All fields are required")
      return

    }

    const updatedProduct = {
      pro_name: name,
      pro_price: price,
      pro_qauntity: quantity
    }

    try {

      await axios.put(
        `http://127.0.0.1:8000/api/update_product/${productId}/`,
        updatedProduct
      )

      alert("Product Updated Successfully")

    } catch (error) {

      console.log(error)
      alert("Error updating product")

    }

  }

  useEffect(() => {

    getSingleProduct()

  }, [])

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
          }}
        >

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>

        </div>

      </nav>

      {/* Edit Form */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
        }}
      >

        <form
          onSubmit={handleUpdate}
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
            }}
          >
            Edit Cake
          </h2>

          {/* Name */}

          <div>

            <label
              style={{
                fontWeight: "bold",
              }}
            >
              Cake Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter cake name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
              }}
            />

          </div>

          {/* Price */}

          <div>

            <label
              style={{
                fontWeight: "bold",
              }}
            >
              Price
            </label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
              }}
            />

          </div>

          {/* Quantity */}

          <div>

            <label
              style={{
                fontWeight: "bold",
              }}
            >
              Quantity
            </label>

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQnty(e.target.value)}
              placeholder="Enter quantity"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                outline: "none",
              }}
            />

          </div>

          {/* Submit */}

          <input
            type="submit"
            value="Update Cake"
            style={{
              padding: "14px",
              background: "#ff4d6d",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />

        </form>

      </div>

    </div>

  )

}

export default EditPro