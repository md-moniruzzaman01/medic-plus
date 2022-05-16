import Aos from 'aos';
import React, { useEffect } from 'react';
import bgImg from '../../../image/bg.png'
import doctorPng from '../../../image/medium-shot-smiley-nurse-with-stethoscope.png'
import Info from './Info';

const LoadingScreen = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <div className='min-h-[110vh] relative' style={{
            backgroundImage:`url(${bgImg})`,
            height:'100%',
            backgroundPosition:'cover',
            backgroundSize:'100%'}} >

            <div className='min-h-[110vh]   relative' style={{
                backgroundColor: `rgba(39, 144, 245,0.2)`,
                
                width:'100%'
                }}>

            
            <div data-aos="zoom-in-right" class=" inline-block justify-between items-center  container mx-auto lg:w-full lg:flex"  >
                <div className=' flex justify-center w-8/12 mx-auto'>
                    <div className='max-w-3xl'>
                    <h1 class="text-3xl md:text-6xl font-bold text-custom-secondary">Complete health care solution for everyone</h1>
                    <p class="py-6 text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iure facilis, dicta eligendi aliquid deleniti, in sed sequi voluptas esse dolore doloribus? Aspernatur, fuga velit aperiam similique temporibus asperiores saepe?</p>
                    <button class="btn border-0 bg-custom-primary">Check Our Services</button>
                    </div>
                </div>
              <div className='mx-auto w-8/12 max-w-lg ' >
              
                <img className='w-full' src={doctorPng} alt="" />
               </div>

            </div>
            </div>

                <div className='block lg:absolute  bottom-0 left-[10%]'>
                 <Info></Info>
                </div>
        </div>

    );
};

export default LoadingScreen;