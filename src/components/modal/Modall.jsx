import React from "react";
import "./modal.css";
const Modall = ({ spacificRecipe }) => {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        aria-label="Close"
        data-bs-dismiss="modal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-capitalize"
                id="staticBackdropLabel"
              >
                recipes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <figure className="mb-3">
                <img src={spacificRecipe.image_url} className="w-100" />
              </figure>
              <p className="text-center fs-4 text-capitalize object-fit-contain">
                {spacificRecipe.title}
              </p>
              <h3 className="text-capitalize text-success">ingredients :</h3>
              <ul className=" px-3 gap-3">
                {spacificRecipe.ingredients?.map((ele, idx) => {
                  return (
                    <li className="mb-3 " key={idx}>
                      {ele}
                    </li>
                  );
                })}
              </ul>
              <section className="how d-flex gap-3 align-items-center">
                <h3 className="text-capitalize text-success fs-5">
                  how to make it :
                </h3>
                <a href={spacificRecipe.source_url} target="_blank">
                  click here
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modall;
