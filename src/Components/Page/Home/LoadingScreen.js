import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../image/bg.png'
import doctorPng from '../../../image/medium-shot-smiley-nurse-with-stethoscope-min.png'
import Info from './Info';

const LoadingScreen = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <div  className='min-h-[110vh] relative' style={{
            backgroundImage:`url(${bgImg})`,
            height:'100%',
            backgroundPosition:'cover',
            backgroundSize:'100%'}} >

            <div  className='min-h-[110vh]   relative' style={{
                backgroundColor: `rgba(39, 144, 245,0.2)`,
                
                width:'100%'
                }}>

            
            <div data-aos="zoom-in-right" className="justify-between items-center flex flex-col lg:flex-row  container mx-auto lg:w-full py-5"  >
                <div  className=' flex justify-center w-11/12 lg:w-8/12 mx-auto mt-5 order-2 lg:order-1'>
                    <div  className='max-w-3xl'>
                    <h1 className="text-3xl md:text-6xl font-bold text-custom-secondary">Complete health care solution for everyone</h1>
                    <p className="py-6 text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iure facilis, dicta eligendi aliquid deleniti, in sed sequi voluptas esse dolore doloribus? Aspernatur, fuga velit aperiam similique temporibus asperiores saepe?</p>
                    <Link to='/appointment'><button className="btn border-0 bg-custom-primary">Check Our Services</button></Link>
                    </div>
                </div>
              <div  className='mx-auto w-8/12 max-w-lg order-1 lg:order-2' >
              
                <img  className='w-full' src={doctorPng} alt="" />
               </div>

            </div>
            </div>

                <div  className='block lg:absolute  bottom-0 left-[10%]'>
                 <Info></Info>
                </div>
        </div>

    );
};

export default LoadingScreen;