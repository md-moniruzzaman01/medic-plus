import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";
const ReviewCard = ({review}) => {
    const {body,company,email,name,picture,rating}= review
    return (
        <div className='  w-full  p-2 '>
          <div className='border-2 relative py-7 px-5 h-72'>



          <div className='flex justify-end mb-3'> <h4 className='font-semibold '>{email}</h4></div>
            <p className='italic'>“{body}”</p>
            
            <div className='flex  absolute bottom-4'>
                <div>
                <p className='mb-3 text-gray-700 flex items-center'>
                <AiFillStar className='text-amber-600'/> 
                <AiFillStar className='text-amber-600'/> 
                <AiFillStar className='text-amber-600'/> 
                <AiFillStar className='text-amber-600'/> 
                <AiFillStar className='text-amber-600 mr-2'/> 
                    {rating} <span>stars </span>  </p>
                
                <div className='flex'>
                    <div className='mr-5'><img className='w-14 rounded-full' src={picture} alt="" /></div>
                    <div >
                    <h3 className='font-heading font-normal text-textColor'>{name}</h3>
                    <p className='text-textColor font-basic font-normal '>Happy Customar</p>
                    </div>
                </div>
                </div>
                
                <div className='ml-14'>
                    <p className='-text-4xl text-gray-400'>< IoMdQuote/></p>
                    
                    
                </div>
            </div>

          </div>
            
        </div>
    );
};

export default ReviewCard;