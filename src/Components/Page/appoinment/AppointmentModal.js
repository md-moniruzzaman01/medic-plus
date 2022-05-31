import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, date,setTreatment}) => {
    const { name, slots} = treatment;
    const handleBooking = e=>{
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Appointment booking for : {name}</h3>
                    <form onSubmit={ handleBooking }  className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            
                            {
                                slots.map(slot=> <option  value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input  type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="your email" className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn bg-custom-primary border-0 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;