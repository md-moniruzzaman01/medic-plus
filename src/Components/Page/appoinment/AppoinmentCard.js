import React from 'react';

const AppoinmentCard = ({service,setTreatment}) => {
  
    const {name,slots}=service
    return (
        <div className="card w-80 bg-base-100 shadow-lg mx-auto ">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length} slots Available</p>
    <div className="card-actions justify-end">
    <label  disabled={slots.length===0}
      
      onClick={()=>setTreatment(service)} htmlFor="appointment-modal" className="btn modal-button  bg-custom-primary border-0">book now</label>
      
    </div>
  </div>
</div>
    );
};

export default AppoinmentCard;