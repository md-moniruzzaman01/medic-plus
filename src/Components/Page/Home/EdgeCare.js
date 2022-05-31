import React from 'react';
import edgeImg from '../../../image/xbusiness.png.pagespeed.ic.T1vlgqVj2y.webp'
import { GiFirstAidKit } from "react-icons/gi";
const EdgeCare = () => {
    return (
        <div className="hero my-44 w-full max-w-7xl mx-auto">
  <div  className="hero-content flex-col lg:flex-row-reverse">
   <div  className='w-full'> <img   className='max-w-2xl w-full'  src={edgeImg}  /></div>
    <div  className='space-y-3 flex flex-col  items-center md:items-start w-full' data-aos="fade-right">
        <p  className='py-5 bg-custom-primary w-20 text-4xl text-white rounded-full flex justify-center items-center'><GiFirstAidKit/></p>
      <h1 className="text-2xl font-semibold">Leading edge care for Your family</h1>
      <p  className='mr-7'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
    );
};

export default EdgeCare;