import React from 'react';
import { Link } from 'react-router-dom';

const OfferAppoinment = () => {
    return (
        <div className=" ">
  <div data-aos="fade-up" className="hero-content text-center text-white py-20 bg-sky-400 max-w-6xl rounded-lg mx-auto my-32">
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold">Make an Online Appointment</h2>
      
      <p className="py-6">It's time to change your life today. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/appointment'><button className="btn bg-white text-sky-400 border-0 rounded-3xl px-7 font-bold ">Get an Appointment</button></Link>
    </div>
  </div>
</div>
    );
};

export default OfferAppoinment;