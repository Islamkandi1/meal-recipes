import React from "react";
import Logo from "./../logo/Logo";

const Recipe = ({ ele, getSpacificRecipe }) => {
  return (
    <>
      <section
        className="col "
        onClick={() => {
          getSpacificRecipe(ele.recipe_id);
        }}
      >
        <section className=" card">
          <img src={ele.image_url} className="card-img-top " alt="..." />
          <div className="card-body text-center ">
            <h5 className="card-title mb-3">
              {ele.title.split(" ", 2).join(" ") + "...."}
            </h5>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              type="button"
              className="btn btn-success"
            >
              show recipe
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Recipe;
