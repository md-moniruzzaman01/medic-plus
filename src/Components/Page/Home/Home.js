import React from 'react';
import Department from './department';
import BestCare from './BestCare';


import LoadingScreen from './LoadingScreen';
import EdgeCare from './EdgeCare';
import Testimonials from './Testimonials';



const Home = () => {
        
    return (
        <div className=''>
            
           <LoadingScreen></LoadingScreen>
           <BestCare></BestCare>
           <Department></Department>
           <EdgeCare></EdgeCare>
           <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;