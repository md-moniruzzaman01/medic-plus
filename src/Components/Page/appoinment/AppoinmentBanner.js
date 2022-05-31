import React from 'react';
import appointmentimg from '../../../image/6274.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({date,setDate}) => {
    
    return (
        <div className="hero min-h-[80vh]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div  className='max-w-2xl'>
    <img src={appointmentimg} className=" w-full " />
    </div>
    <div  className='max-w-4xl  '>
        <DayPicker 
         mode="single"
         selected={date}
         onSelect={setDate}
         />
    
    </div>
  </div>
</div>
    );
};

export default AppoinmentBanner;