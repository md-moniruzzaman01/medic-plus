import React from 'react';
import blog1 from '../../../image/best1 (1).webp'
import blog2 from '../../../image/best1 (2).webp'
import { BsCheck2Circle } from "react-icons/bs";

const BestCare = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-32'>
               <div className='relative flex justify-center lg:items-center mb-44'>
                 <div className=''>
                    <img className='h-[18rem] md:h-[24rem]' src={blog1} alt="" />
                  </div>
                  <div className='absolute top-24 z-10 left-[240px] md:left-[440px]'>
                    <img className='h-[18rem] md:h-[24rem]' src={blog2} alt="" />
                  </div>
               </div>

               <div className='mx-11 mt-7 space-y-7 max-w-xl' data-aos="fade-left">
                   <p className='text-2xl font-light'>Welcome to Docmed</p>
                   <h2 className='text-4xl font-semibold pt-7'>Best Care For Your <span className='block'>Good Health</span></h2>
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