import React from "react";
import Profile from "../Components/Profile";
import { Link } from "react-router-dom";
import logo from "../Images/Pink Abstract Fashion Logo1.png";
// import getCartapi from "../api/getCart";
import deleteCartapi from "../api/deleteCartapi";

const Navigation = ({ cartData, setCart, user, setUser }) => {
  const deleteCart = async (id) => {
    await deleteCartapi(id);
    setCart(cartData.filter((cart) => cart._id !== id));
  };
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-success navbar-dark w-100 justify-content-end">
        <div className="d-flex">
        {localStorage.getItem("token") && <Link
            className="text-success mx-2 "
            to="/get-cart"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i className="fa fa-cart-plus text-white"></i>
            <span className="badge badge-success text-danger bg-white p-1">
              {cartData.length}
            </span>
          </Link>}

          {!localStorage.getItem("token") && <Link className="nav--link" to="/login">
            Login
          </Link>}
          {localStorage.getItem("token") && <Profile user={user} setUser={setUser} />}
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark w-100">
        <div className="container-fluid">
          <img
            src={logo}
            width="50rem"
            className="logo d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <a
            className="btn btn-secondary fs-4 mobile-menu"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            &equiv;
          </a>

          <div
            className="offcanvas offcanvas-start bg-dark"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <img
                src={logo}
                width="60rem"
                className="logo d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link className="nav--link  " to="/">
                    Home
                  </Link>
                  <Link className="nav--link  " to="/products">
                    Products
                  </Link>
                  <Link className="nav--link " to="/men">
                    Men
                  </Link>
                  <Link className="nav--link   mx-2 " to="/women">
                    Women
                  </Link>
                  <Link className="nav--link   mx-2 " to="/aboutus">
                    AboutUs
                  </Link>
                  <Link className="nav--link   mx-2 " to="/labs">
                    Labs
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end bg-success text-white"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your Cart</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <p key={1}>Never leave a cart empty</p>
          </div>
          <div className="Yourcart">
            {cartData.length > 0 &&
              cartData.map(
                (item) =>
                  item && (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={item.image}
                          style={{ height: "6rem" }}
                          alt={item.title}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <div className="callout" data-closable>
                        <button
                          className="close-button"
                          aria-label="close"
                          data-dismiss="Close alert"
                          type="button"
                          data-close
                          onClick={() => deleteCart(item._id)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </tr>
                  )
              )}
            <Link role="button" to="/get-cart" className="showcart">
              Mycart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
