import React, { useEffect, useState } from "react";
import Headers from "./../headers/Headers";
import "./menu.css";
import axios from "axios";
import Recipe from "./../recipe/Recipe";
import Modall from "./../modal/Modall";
import DotLoader from "react-spinners/DotLoader";
const Menu = () => {
  // * search state================
  const [search, setSearch] = useState("");
  // *api state============================
  const [recipes, setRecipes] = useState(null);
  // *error state========================
  const [errormessage, serError] = useState(null);
  // *loadding state===========================
  const [loadding, setLoadding] = useState(false);

  // ! handle Search Value====================================
  function handleSearchValue() {
    setSearch(event.target.value.trim());
  }
  // hanlde popular value=========================================
  function leftValue() {
    setSearch(event.target.innerText);
  }
  //  api spacific state====================================================
  const [spacificRecipe, setSpacificRecipe] = useState("");

  // getApi==========================================================
  async function getApi(search) {
    try {
      setLoadding(false);
      clearSearch();
      const { data } = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${search}`
      );
      setRecipes(data.recipes);
      setLoadding(true);
      serError(" ");
    } catch (error) {
      error.message = "somthing went wrong";
      setRecipes(null);
      serError(error.message);
      setLoadding(true);
    }
  }
  // call api function==========================
  useEffect(() => {
    document.title = "menu";
    getApi("pizza");
  }, []);
  // get spacific recipe=======================================
  async function getSpacificRecipe(id) {
    const { data } = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    setSpacificRecipe(data.recipe);
  }
  // clear search input================================
  function clearSearch() {
    setSearch("");
  }
  // ? jsx code ======================================
  return (
    <>
      <Headers text={"menu"} />
      <section className="menu pt-4">
        <section className="container">
          <form
            className="mb-4"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              getApi(search);
            }}
          >
            <section className="input-box d-flex align-items-center flex-row ">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="search for recipe"
                className="w-100 border-0"
                name="secrch"
                value={search}
                onChange={handleSearchValue}
              />
              <button type="submit" className="search-btn flex-shrink-1">
                search
              </button>
            </section>
          </form>

          {errormessage != null ? (
            <p className="mb-3 text-center fs-5 bg-success text-light  rounded-4">
              {errormessage}
            </p>
          ) : (
            " "
          )}
          {loadding == false ? (
            <section className="vh-100 d-flex justify-content-center align-items-center">
              <DotLoader color="#1fed16" loading />
            </section>
          ) : (
            <section>
              <h2 className="fs-4 mb-3 text-capitalize text-success">
                popular recipe :
              </h2>
              <section className="most-popular d-flex flex-wrap align-items-center gap-4 row-gap-2 ">
                <p
                  type="button"
                  className=" py-1 px-3 text-light rounded-3 text-capitalize"
                  onClick={() => {
                    leftValue();
                  }}
                >
                  pizza
                </p>
                <p
                  type="button"
                  className=" py-1 px-3 text-light rounded-3 text-capitalize"
                  onClick={() => {
                    leftValue();
                  }}
                >
                  pasta
                </p>
                <p
                  type="button"
                  className=" py-1 px-3 text-light rounded-3 text-capitalize"
                  onClick={() => {
                    leftValue();
                  }}
                >
                  corn
                </p>
                <p
                  type="button"
                  className=" py-1 px-3 text-light rounded-3 text-capitalize"
                  onClick={() => {
                    leftValue();
                  }}
                >
                  potato
                </p>
                <p
                  type="button"
                  className=" py-1 px-3 text-light rounded-3 text-capitalize"
                  onClick={() => {
                    leftValue();
                  }}
                >
                  mushrooms
                </p>
                <p
                  type="button"
                  className=" py-1 px-3 text-light rounded-3 text-capitalize"
                  onClick={() => {
                    leftValue();
                  }}
                >
                  red Pepper
                </p>
              </section>
              <section className="row py-5 g-3 row-cols-1 row-cols-md-3 row-cols-lg-4">
                {recipes?.map((ele, idx) => {
                  return (
                    <Recipe
                      key={idx}
                      ele={ele}
                      getSpacificRecipe={getSpacificRecipe}
                    />
                  );
                })}
              </section>
            </section>
          )}
        </section>
      </section>
      <Modall spacificRecipe={spacificRecipe != {} ? spacificRecipe : ""} />
    </>
  );
};

export default Menu;
