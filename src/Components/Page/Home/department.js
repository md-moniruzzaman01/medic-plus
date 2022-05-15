import React from 'react';
import eye from '../../../image/department/eye care.webp'
import physical from '../../../image/department/physical therapy.webp'
import dental from '../../../image/department/dental care.webp'
import diagonostic from '../../../image/department/diagonostic test.webp'
import skin from '../../../image/department/skin.webp'
import surgery from '../../../image/department/surgery service.webp'
import DepartmentCard from './DepartmentCard';

const Department = () => {
    const department = [
        {   _id:1,
            img: eye,
            department:"Eye Care",
            body:"Esteem spirit temper too say adieus who direct esteem."
        },
        {   _id:2,
            img: physical,
            department:"Physical Therapy",
            body:"Esteem spirit temper too say adieus who direct esteem."
        },
        {   _id:3,
            img: dental,
            department:"Dental Care",
            body:"Esteem spirit temper too say adieus who direct esteem."
        },
        {   _id:4,
            img: diagonostic,
            department:"Diagnostic Test",
            body:"Esteem spirit temper too say adieus who direct esteem."
        },
        {   _id:5,
            img: skin,
            department:"Skin Surgery",
            body:"Esteem spirit temper too say adieus who direct esteem."
        },
        {   _id:6,
            img: surgery,
            department:"Surgery Service",
            body:"Esteem spirit temper too say adieus who direct esteem."
        }
        
        
    ]
    return (
        <div className='min-h-screen  bg-gray-100'>
            <h1 className='text-custom-secondary text-4xl text-center font-semibold pt-11'>Our Department</h1>
            <div className='max-w-xl mx-auto'>
            <p className='text-center mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eaque molestias minima odio consectetur sequi, commodi blanditiis </p>
            </div>

            <div className='p-10  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-7 max-w-6xl mx-auto'>
               
               {
                    department.map(dpCard=> <DepartmentCard
                        dpCard={dpCard}
                        key={dpCard._id}>

                    </DepartmentCard>)
                }
               </div>
                    <div >
      
        </div>
            </div>
       
    );
};

export default Department;