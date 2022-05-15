import React from 'react';
import Department from './department';
import BestCare from './BestCare';


import LoadingScreen from './LoadingScreen';


const Home = () => {
    return (
        <div className=''>
            
           <LoadingScreen></LoadingScreen>
           <BestCare></BestCare>
           <Department></Department>
           
        </div>
    );
};

export default Home;