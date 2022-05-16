import React from 'react';
import edgeImg from '../../../image/xbusiness.png.pagespeed.ic.T1vlgqVj2y.webp'
import { GiFirstAidKit } from "react-icons/gi";
const EdgeCare = () => {
    return (
        <div class="hero min-h-screen  max-w-7xl mx-auto">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img data-aos="fade-left" className='w-full' src={edgeImg} class="max-w-2xl  shadow-2xl" />
    <div className='space-y-3 flex flex-col  items-center md:items-start' data-aos="fade-right">
        <p className='py-5 bg-custom-primary w-20 text-4xl text-white rounded-full flex justify-center items-center'><GiFirstAidKit/></p>
      <h1 class="text-2xl font-semibold">Leading edge care for Your family</h1>
      <p className='mr-7'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
    );
};

export default EdgeCare;