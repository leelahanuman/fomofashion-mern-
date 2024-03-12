import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../Images/sellers.webp";
import Image2 from "../Images/sneakers.webp";
import Image3 from "../Images/Boots.webp";
import Image4 from "../Images/Casuals&Canvas.webp";
import Image5 from "../Images/men.webp";
import Image6 from "../Images/women.webp";
import Image7 from "../Images/shopnow.webp";
import Images from "../Images/carousel.webp";
import secondslide from "../Images/carousel3.webp";
import thirdslide from "../Images/carousel2.webp";
import Image8 from "../Images/shopMen.webp";
import final from "../Images/im.webp";
import HomeCard from "../Components/HomeCard";
import image9 from "../Images/smallimage.webp";
import image10 from "../Images/smallimage2.webp";
import image11 from "../Images/smallimage3.webp";
import image12 from "../Images/smallimage4.webp";
import image13 from "../Images/smallimage5.webp";
import image14 from "../Images/close.webp";
import image15 from "../Images/close1.webp";
import fourthlide from "../Images/cr4.webp";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  // const location=useLocation()
  
  return (
    <>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={Images} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={secondslide}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thirdslide} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fourthlide} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div></div>
      <div className="row row-cols-1 row-cols-md-3 g-4 col-10 m-auto">
        <HomeCard
          title="Bestsellers"
          des="ShopNow"
          image={Image1}
          link="Bestsellers"
        />
        <HomeCard
          title="Sneakers"
          des="ShopNow"
          image={Image2}
          link="sneakers"
        />
        <HomeCard title="Boots" des="ShopNow" image={Image3} link="boots" />
        <HomeCard
          title="Casuals&canvas"
          des="ShopNow"
          image={Image4}
          link="canvas"
        />
        <HomeCard
          title="Mens Appearal"
          des="ShopNow"
          image={Image5}
          link="men"
        />
        <HomeCard
          title="Womens Apperal"
          des="ShopNow"
          image={Image6}
          link="women"
        />
      </div>
      <div className="card bg-dark text-white mt-5">
        <img src={Image7} className="card-img" alt="image6" />
        <div className="card-img-overlay align-items-center d-flex flex-row justify-content-end">
          <Link to='products'>
          <button className="shop">shopnow </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="Up col-xl-6 col-md-6 col-sm-12 card mt-5 ml-15">
          <img src={Image8} alt="..." />
          <div className="outside">
            <h1 className="tt">Shop Men's Appereal</h1>
            <Link to="men">
              <button className="shopbtn">Shop Now</button>
            </Link>
          </div>
        </div>

        <div className="Up col-xl-6 col-md-6 col-sm-12  card mt-5 mr-15">
          <img src={final} alt="..." />
          <div className="outside">
            <h1 className="tt">Shop Womens Appereal</h1>
            <Link to="women">
              <button className="shopbtn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="smallimage m-auto  pl-16">
        <div className="head">
          <h1 className="name">AS WORN BY WOODLAND FAM</h1>
          <p className="pl">
            Click to shop & mention us on instagram @woodlandworldwide to be
            featured
          </p>
        </div>
      </div>
      <div className="images">
        <img src={image9} alt=",,,,," />
        <img src={image10} alt=",,,,," />
        <img src={image11} alt=",,,,," />

        <img src={image12} alt=",,,,," />
        <img src={image13} alt=",,,,," />
      </div>
      <div className="row">
        <div className="Down col-xl-6 col-md-6 col-sm-12 card mt-5">
          <img src={image14} alt="..." />
          <div className="side">
            <h1 className="tt">Pro Planet</h1>
            <p>
              Proplanet is a community that is committed to make our planet.
            </p>
            <button className="shopbtn">ReadMore</button>
          </div>
        </div>

        <div className="Down col-xl-6 col-md-6 col-sm-12 card mt-5 mr-5">
          <img src={image15} alt="..." />
          <div className="side">
            <h1 className="tt">Process</h1>
            <p>
              expertise combines activity focused designs.
            </p>
            <button className="shopbtn">ReadMore</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
