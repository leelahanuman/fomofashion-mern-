import React, { useEffect, useState } from "react";
import cartbutton from "../Images/cart-button.png";
import { useParams } from "react-router-dom";
import getSingleProducts from "../api/getSingleProducts";
import createCartapi from "../api/createCartapi";

const Product = ({cartData, setCart}) => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const retrieveSingleProducts = async () => {
    const response = await getSingleProducts(params.id);
    setProducts(response);
  };

  useEffect(() => {
    retrieveSingleProducts();
    // eslint-disable-next-line
  }, []);

  const addCart = async (id) => {
    const response = await createCartapi(id);
    setCart([...cartData, response]);
  };
  return (
    <div>
      <div className="showmore d-flex">
        <div className="identity">
          <img src={products.image} alt=".." />
        </div>
        <hr></hr>
        <div className="more">
          <h1>{products.name}</h1>
          <p>&#8377; {products.price}</p>
          <p>{products.description}</p>
          <p>Price includes Taxes</p>

          <hr></hr>
          <div className="status">
            <h3>Free delivery</h3>
            <h6>For orders above ₹1000. Delivery in 3-7 working days.</h6>
          </div>
          <div className="finalcart">
            <button className="morecart" onClick={()=>addCart(products._id)}>
              <img src={cartbutton} alt="cartbutton" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
