import React, { useEffect, useState } from "react";
import getProducts from "../api/getProducts";
import { Link } from "react-router-dom";
import createCartapi from "../api/createCartapi";

export default function CardAxios({ cartData, setCart, category }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const retrieveProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  const addCart = async (id) => {
    const response = await createCartapi(id);
    if(response===undefined){
      return;
    }
    setCart([...cartData, response]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter"
        className="way"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="container">
        <div className="row">
          {products
            .filter((product) => {
              if (product.category === category) {
                return product;
              } else {
                if (category === "") {
                  return product;
                } else {
                  // eslint-disable-next-line
                  return;
                }
              }
            })
            .map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                <div className="card text-truncate">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    height="250px"
                    width="100%"
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-truncate">{product.name}</h5>
                    <h5 className="card-title">Price: {product.price}$</h5>
                    <h6 className="card-text truncate text-truncate">
                      Desc: {product.description}
                    </h6>
                    <h6 className="card-text">Category: {product.category}</h6>

                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        // setCart([...cart, { id: product }]);\
                        addCart(product._id)
                      }}
                    >
                      Add To Cart
                    </button>
                    <Link to={`/products/${product._id}`}>
                      <button className="btn btn-outline-primary">
                        showDetails
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
