import React from 'react';

const DepartmentCard = ({dpCard}) => {
    const {img,body,department}=dpCard;
    console.log(dpCard);
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className='flex justify-center items-center'>
            <div className="rounded overflow-hidden bg-white relative min-h-[400px] w-[22rem]">
        <img className="w-full " src={img} alt="Mountain"/>
        <div className="px-6 py-4">
          <div className="font-semibold text-2xl mb-2">{department}</div>
          <p className="text-gray-500 text-base mb-11">
         {body}
          </p>
        </div>
        <div className="px-6 pb-2 flex justify-start absolute bottom-1 left-0">
        <button  className=' px-5 py-1 text-custom-primary'>Read more...</button>
        </div>
      </div>
        </div>
    );
};

export default DepartmentCard;