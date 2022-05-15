import React from 'react';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="500+" cardBody="Patients EveryDay"  bgClass="bg-custom-primary h-32 mt-11 text-white rounded-tl-lg" ></InfoCard>
            <InfoCard cardTitle="300+"  cardBody="Diagnostics Test" bgClass="bg-white  w-96 h-44  border-b-8 border-custom-primary" ></InfoCard>
            <InfoCard cardTitle="100+" cardBody="Successfull Treatment"  bgClass="bg-custom-primary h-32 mt-11 text-white rounded-tr-lg" ></InfoCard>
        </div>
        </div>
    );
};

export default Info;