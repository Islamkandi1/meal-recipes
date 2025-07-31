import React, { useEffect, useState } from "react";
import  "./upbtn.css"
const UpBtn = () => {
// * btn state opacity=============================
    const [opacity,setOpacity] = useState("opacity-0")
    // follow scroll==================================================
    useEffect(()=>{
        window.addEventListener("scroll",upBtn)
        return ()=>{
             window.removeEventListener("scroll",upBtn)
        }
    },[])
    // ? btn appear=============================
    function upBtn(){
        scrollY >= 120? setOpacity("opacity-100") : setOpacity("opacity-0")
    }
    // scroll to top===============================
    function scrollTop(){
      scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    // ? jsx code ============================================
  return (
    <>
      <button type="button" className={`btn upBtn btn-success p-2 rounded-3 position-fixed ${opacity}`}
      onClick={scrollTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};

export default UpBtn;
