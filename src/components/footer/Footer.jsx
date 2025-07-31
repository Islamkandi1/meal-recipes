import React from "react";
import Logo from "./../logo/Logo";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <section className="footer py-5">
        <section className="container">
          <section className="row g-4 row-cols-1 row-cols-md-3">
            <section className="col">
              <section className="inner">
                <figure className="pb-3">
                  <Logo />
                </figure>
                <p className="my-p text-capitalize">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellendus, cum. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Blanditiis, facere.
                </p>
              </section>
            </section>
            <section className="col">
              <section className="inner text-center">
                <h2 className="text-capitalize mb-5">our social media</h2>
                <ul>
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-square-x-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-youtube"></i>
                  </li>
                </ul>
              </section>
            </section>
            <section className="col">
              <section className="inner text-center">
                <h2 className="text-capitalize mb-4" >
                    contact
                </h2>
                <ul className="special-ui d-block">
                    <li className="d-flex mb-3 gap-3 align-items-center">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="text-capitalize m-0">alexandria , egypt</p>
                    </li>
                    <li className="d-flex mb-3 gap-3 align-items-center">
                        <i className="fa-solid fa-envelope"></i>
                        <p className="text-capitalize m-0">eslamkandil097@gmail.com</p>
                    </li>
                    <li className="d-flex mb-3 gap-3 align-items-center">
                        <i className="fa-solid fa-phone"></i>
                        <p className="text-capitalize m-0">01028091251</p>
                    </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
