import React, { useState } from 'react'
import updateCartapi from '../api/updateCartapi'

export const CartRow = ({item,deleteCart}) => {
    const [cart,setCart]=useState(item.quantity)
  return (
    <tr >
    <td>
      <img
        src={item.image}
        style={{ height: "6rem" }}
        alt={item.title}
      />
    </td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>
      <input
        type="number"
        style={{ width: 50 }}
        min={1}
        max={10}
        value={cart}
        onChange={(e)=>setCart(e.target.value)}

      />
      <button
        style={{
          border: 1,
          borderRadius: "40%",
          background: "white",
        }}
      >
        <i
          className="fa-solid fa-check fas fa-1x text-success"
          style={{ fontSize: 20 }}
          onClick={()=>updateCartapi(cart,item._id)}
        ></i>
      </button>
    </td>
    <td>
      <button
        style={{
          border: 1,
          borderRadius: "40%",
          background: "white",
        }}
        onClick={() => deleteCart(item._id)}
      >
        <i
          className="fa-solid fa-trash fas fa-1x text-danger"
          style={{ fontSize: 20 }}
        ></i>
      </button>
    </td>
  </tr>

  )
}
