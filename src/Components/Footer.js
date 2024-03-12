import React from "react";
import logo from "../Images/Pink Abstract Fashion Logo1.png";

export default function Footer() {
  return (
    <div className="Footer text-success bg-dark mt-5  col-12">
      <div>
        <img
          src={logo}
          alt=".."
          width="100rem"
          className="logo d-inline-block align-top"
        />
      </div>
      <div className="d-flex foot">
        <div className="firstItem">
          <p>ShopFootwear</p>
          <p>Boots</p>
          <p>Sneakers/Sports</p>
          <p>Casuals</p>
          <p>Formals</p>
          <p>Slippers/Flip-Flops</p>
          <p>Sandals</p>
        </div>
        <div className="secondItem">
          <p>Shop Clothing Tops</p>
          <p>Jackets</p>
          <p>T-shirts</p>
          <p>Sweaters</p>
        </div>
        <div className="thirdItem">
          <p>Shop Accessories & Bags</p>
          <p>Bags</p>
          <p>Accessories</p>
          <p>Wallets</p>
        </div>
        <div className="fourthItem">
          <h2 className="nn">Contact US</h2>
          <p>
            Need help? Get in touch with us and we’ll be more than happy to
            guide you through!
          </p>
          <p>care@woodlandworldwide.com 1800 103 3445</p>
          <p>
            Woodland Customer Service Reps are available for inquiries Monday to
            Friday from 10AM to 6PM.
          </p>
        </div>
        <div className="fifthItem">
          <h3>Get alerts for new arrivals, offers, and more!</h3>
          <div className="wrapper">
          <input
            type="text"
            placeholder="Email"
            style={{ width: "80%",}}
            />
          <button className="subscribe">Submit</button>
          </div>
          <p>
            By entering your email, you agree to our Terms of Service & Privacy
            Policy, including receipt of emails and promotions. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
