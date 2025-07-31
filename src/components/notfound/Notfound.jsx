import React from 'react'
import notfound from "./../../assets/images/notfound.jpg" 
import Navbar from './../navbar/Navbar';
const Notfound = () => {
  return (
    <>
    <Navbar back ={"bg-nav"}/>
    <section className="container vh-100 d-flex justify-content-center align-items-center">
      <figure className='notfound mx-auto text-center m-0 pt-5'>
        <img src={notfound} className='w-100' alt="" />
      </figure>

    </section>
    </>
  )
}

export default Notfound
