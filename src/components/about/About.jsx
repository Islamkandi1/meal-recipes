import React, { useEffect } from "react";
import imgs from "./../../assets/imag";
import "./about.css";
import Headers from "./../headers/Headers";
import Subscripe from "../subscribe/Subscripe";
const About = () => {
  // * change title===========================
    useEffect(()=>{
    document.title = "about"
  },[])

  // ? jsx code===================================
  return (
    <>
      <section className="about">
        {<Headers text={"about us"} />}
        <section className="container py-5">
          <section className="row g-4 row-cols-1 row-cols-md-2">
            <section className="col">
              <section className="inner">
                <figure className="overflow-hidden">
                  <img src={imgs.frutePizza} className="w-100" alt="" />
                </figure>
              </section>
            </section>
            <section className="col">
              <section className="inner px-4">
                <section className="mb-5 text-center">
                  <h2 className=" text-capitalize head ">
                    all of kind of <span>recipes</span>
                  </h2>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </section>
                <p className="my-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident earum velit suscipit sed cupiditate dolores natus
                  nihil molestiae incidunt neque! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Commodi, aut natus neque
                  similique nam enim. Optio reprehenderit mollitia sed fuga?
                </p>
              </section>
            </section>
          </section>
        </section>
        <Subscripe />
      </section>
    </>
  );
};

export default About;
