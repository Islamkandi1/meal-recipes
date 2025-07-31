import React, { useEffect, useState } from "react";
import "./contact.css";
import Headers from "./../headers/Headers";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  // inputs state value===================================
  const [inputValue, setValue] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const { userName, userEmail, message } = inputValue;
  //   handle inputs value===================
  function handleValue() {
    let { value, id } = event.target;
    setValue({ ...inputValue, [id]: value });
  }
  //  * toast==============
  function notification() {
    if (userName != "" && userEmail != "" && message != "") {
      toast.success("message sended", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setValue({
        userName: "",
        userEmail: "",
        message: "",
      });
    } else {
      toast.error("❌ all inputs are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  //   change title===========================
  useEffect(() => {
    document.title = "contact us";
  }, []);
  // ? jsx code========================================
  return (
    <>
      <Headers text={"contact us"} />
      <section className="container contact">
        <section className="content py-5">
          <section className="mb-5 text-center">
            <h2 className=" text-capitalize head  ">contact us</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </section>
          <form className="px-3 my-form" onSubmit={(e) => e.preventDefault()}>
            {/* <ToastContainer stacked /> */}
            <section className="input-box">
              <label
                htmlFor="userName"
                className={userName != "" ? "label-active" : ""}
              >
                userName :
              </label>
              <input
                value={userName}
                onChange={handleValue}
                type="text"
                name="user-name"
                id="userName"
                placeholder="userName"
              />
            </section>
            <section className="input-box">
              <label
                htmlFor="userEmail"
                className={userEmail != "" ? "label-active" : ""}
              >
                userEmail :
              </label>
              <input
                value={userEmail}
                onChange={handleValue}
                type="text"
                name="user-Email"
                id="userEmail"
                placeholder="userEmail"
              />
            </section>
            <section className="input-box">
              <label htmlFor="message">message :</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleValue}
                placeholder="Message"
              ></textarea>
            </section>
            <button type="submit" className=" my-btn" onClick={notification}>
              send message
            </button>
          </form>
          <ToastContainer />
        </section>
      </section>
    </>
  );
};

export default Contact;
