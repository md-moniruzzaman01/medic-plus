import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentCard from './AppoinmentCard';
import AppointmentModal from './AppointmentModal';
const AvailableAppointment = ({date}) => {
    const [services, setServices]=useState([])
    const [treatment, setTreatment]=useState(null)
    useEffect(()=>{
        fetch('https://dry-stream-48145.herokuapp.com/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div  className='min-h-[80vh]'>
            <h3  className='text-2xl mb-11 text-custom-primary text-center'>Available appointment on {format(date, 'PP')}</h3>
         
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-5 mx-auto'>
           {
               services.map(service=> <AppoinmentCard 
                key={service._id} 
                service={service}
                setTreatment={setTreatment}
                ></AppoinmentCard>)
           }
           </div>
            {
                treatment && <AppointmentModal 
                date={date} 
                setTreatment={setTreatment}
                treatment={treatment}></AppointmentModal> 
            }
        </div>
    );
};

export default AvailableAppointment;