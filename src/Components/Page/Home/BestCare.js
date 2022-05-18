import React from 'react';
import blog1 from '../../../image/best1 (1).webp'
import blog2 from '../../../image/best1 (2).webp'
import { BsCheck2Circle } from "react-icons/bs";

const BestCare = () => {
    return (
        <div style={{boxSizing:'border-box'}}>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-32'>
               <div data-aos="fade-right" className='relative flex md:justify-center lg:items-center mb-44 mx-2'>
                 <div>
                    <img className='h-[24rem]' src={blog1} alt="" />
                  </div>
                  <div className='absolute top-24 z-10 left-[20%] md:left-[440px]'>
                    <img className='h-[24rem]' src={blog2} alt="" />
                  </div>
               </div>
               {/*  */}
               <div className='mt-7  space-y-7 mx-5 max-w-xl pb-5'>
                   <p className='text-xl font-light'>Welcome to Docmed</p>
                   <h2 className='text-2xl font-semibold pt-7'>Best Care For Your <span className='block'>Good Health</span></h2>
                     <p className='text-gray-700'>Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                    <div>
                    <p className='flex  items-center'> <span className='text-custom-primary'><BsCheck2Circle/></span> <span className='ml-2'> Apartments frequently or motionless.</span></p>
                     <p className='flex  items-center'> <span className='text-custom-primary'><BsCheck2Circle/></span> <span className='ml-2'>Duis aute irure dolor in reprehenderit in voluptate.</span></p>
                     <p className='flex  items-center'> <span className='text-custom-primary'><BsCheck2Circle/></span> <span className='ml-2'>Voluptatem quia voluptas sit aspernatur.</span></p>
                    </div>
                    <button class="btn btn-outline btn-info px-7">Learn more</button>
                  </div>

            </div>
        </div>
    );
};

export default BestCare;