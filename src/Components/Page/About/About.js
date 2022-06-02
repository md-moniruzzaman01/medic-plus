import React from 'react';
import developer from '../../../image/262030150_616890042765856_3516261701035331127_n.jpg';
const About = () => {
    return (
        <div className='min-h-screen block lg:flex items-center'>
            <div className='  lg:mx-11'>
                <img className='w-96 h-96  rounded-full' src={developer} alt="" />
            </div>
            <div className=' max-w-4xl mx-5 lg:mr-auto'>
             <p className='text-3xl'>
                 Hi,
             </p>
             <p className='text-xl lg:text-2xl'>My name is <span className='text-red-700 font-semibold'>Moniruzzaman</span>. Reactjs based  Fontend Web designer and Developer. Work with 15+ projects with technolonogy like Bootstrap, Tailwind, reactjs, firebase,stipe, Nodejs, MongoDb. Please contact me at ➡ <span className='link text-blue-600'>md.moniruzzaman1050@gmail.com</span></p>
            </div>
        </div>
    );
};

export default About;