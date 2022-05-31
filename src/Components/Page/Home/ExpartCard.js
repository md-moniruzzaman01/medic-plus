import React from 'react';

const ExpartCard = ({expart}) => {
    const {picture,name,body}=expart
    return (
      <div  className='flex justify-center' >
        <div className="card max-w-[300px] bg-base-200  mb-11">
  <figure><img  className='w-full' src={picture} alt="Shoes" /></figure>
  <div className="card-body text-center ">
    <h2 className="text-xl  font-semibold">{name}</h2>
    <p>{body}</p>
    
  </div>
</div>
</div>
    );
};

export default ExpartCard;