import React from "react";
import "./header.css";
const Headers = ({ text }) => {
  return (
    <div>
      <section className="headers pt-5  ">
        <section className="container pt-5 pb-3">
          <h2 className="text-capitalize"> {text}</h2>
        </section>
      </section>
    </div>
  );
};

export default Headers;
