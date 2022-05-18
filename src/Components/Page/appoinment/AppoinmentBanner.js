import React, { useState } from 'react';
import appointmentimg from '../../../image/6274.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppoinmentBanner = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div className='max-w-2xl'>
    <img src={appointmentimg} class=" w-full " />
    </div>
    <div className='max-w-4xl  '>
        <DayPicker 
         mode="single"
         selected={date}
         onSelect={setDate}
         />
    <p>You picked {format(date, 'PP')}.</p>
    </div>
  </div>
</div>
    );
};

export default AppoinmentBanner;