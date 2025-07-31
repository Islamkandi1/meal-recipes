import React, { useEffect } from "react";
import "./home.css";
import SwiperItem from "./../swiper/Swiper";
import Subscripe from './../subscribe/Subscripe';

const Home = () => {
  // change title====================================
  useEffect(()=>{
    document.title = "home"
  },[])
  return (
    <>
      <section className="header">
        <section className="container mb-4   d-flex justify-content-center align-items-center">
          <div className="text">
            <h1 className="mb-4">
              It is even better than an expensive cookery book
            </h1>
            <p>Learn how to make your favorite restaurant’s dishes</p>
          </div>
        </section>
      </section>
      <section className="carousel py-5">
        <section className="container mb-4">
          <section className="mb-5 text-center">
            <h2 className=" text-capitalize head ">
              all of kind of <span>recipes</span>
            </h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </section>
          <SwiperItem />
        </section>
      </section>
    <Subscripe/>
    </>
  );
};

export default Home;
