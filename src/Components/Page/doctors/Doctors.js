import React from 'react';
import './appointment.modiul.css'
import doctor from '../../../image/x2.png.pagespeed.ic.IG-jB4LJxU.webp'
import { RiStethoscopeFill,RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import { BsCheck2Circle,BsStarHalf,BsStarFill } from "react-icons/bs";

const Appoinment = () => {
    const starCount = 4.9
    const startsNumer = Math.floor(starCount)
    const halfstart = Math.ceil(starCount-startsNumer)
    let starts =[]
    for (var index = 0; index < startsNumer; index++) {
        starts.push(<BsStarFill/>)
      }
    return (
        <div className='min-h-screen grid-section'>
            <div className=' bg-red-500 sticky top-0 h-[95vh]'>

            </div>
            <div className='h-72 min-h-[150vh]  border rounded-lg mx-2'>
                {/* card */}

                <div className='flex justify-between p-7 border rounded-lg  m-2'>
                    <div className='flex '>
                        <div className='w-44'><img className='w-full' src={doctor} alt="doctor img" /></div>
                        <div className='ml-2 space-y-3'>
                        <div className='mt-2'>
                        <h2 className='font-semibold text-xl flex items-center'>Dr. Ruby Perrin <span className='text-green-700 ml-2'><BsCheck2Circle/> </span></h2>
                        <p className='text-gray-500 font-light'>MDS - Periodontology and Oral Implantology, BDS</p>
                        </div>
                       <div className=' flex text-amber-600 text-lg items-center'>
                       {
                           starts.map(start=> <p>{start}</p>)
                           
                       }
                       <p className='flex items-center'>{halfstart? <p><BsStarHalf/></p>: null} <span className='text-gray-800  text-base ml-2'>( {starCount} )</span></p>
                       </div>
                       <p className='flex items-center '><span> <RiStethoscopeFill/> </span> <span className='text-sky-600 font-medium text-md ml-2'>Cardiology</span> </p>
                       
                        </div>
                    </div>
                    {/* right side */}
                    <div className='text-gray-600 space-y-2 w-48'>
                       <p className='flex items-center'> <span className='mr-2'><AiOutlineCalendar/></span> Available on Fri, 20 Mar </p>
                       <p className='flex items-center'> <span className=' mr-2'><IoLocationOutline/></span>  Florida, USA </p>
                       <p className='flex items-center'> <span className=' mr-2'><RiMoneyDollarCircleLine/></span> $300 - $1000s </p>
                      
                      <button class="btn btn-outline btn-info  w-full">view Profile</button>
                      <div><button class="btn btn-info w-full text-white" >book now</button></div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;