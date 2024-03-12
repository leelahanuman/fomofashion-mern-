import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ title, des, image, link }) => {
  return (
    <div>
      <div className="col col-lg-4 col-md-4 col-sm-6 col-12 m-auto p-6 w-75 cards">
        <div className="card mt-5">
          <img src={image} alt="..." />
          <div className="inside">
            <h1>{title}</h1>
            <button>
              <Link
                to={link}
                style={{ textDecoration: "none", color: "white" }}
              >
                {des}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
