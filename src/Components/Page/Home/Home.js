import React from 'react';
import Department from './department';
import BestCare from './BestCare';


import LoadingScreen from './LoadingScreen';
import EdgeCare from './EdgeCare';
import Testimonials from './Testimonials';
import OfferAppoinment from './OfferAppoinment';



const Home = () => {
        
    return (
        <div  className=''>
            
           <LoadingScreen></LoadingScreen>
           <BestCare></BestCare>
           <Department></Department>
           <Testimonials></Testimonials>
           <EdgeCare></EdgeCare>
           <OfferAppoinment></OfferAppoinment>
           
        </div>
    );
};

export default Home;