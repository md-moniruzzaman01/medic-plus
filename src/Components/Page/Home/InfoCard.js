import React from 'react';

const InfoCard = ({cardTitle,bgClass,cardBody}) => {
    return (
        <div className={`relative flex  mx-5 lg:card-side bg-base-100  ${bgClass}`}>
        
        <div className="card-body mt-5 text-xl justify-center items-center">
            <h2 className="font-bold">{cardTitle}</h2>
            <p>{cardBody}</p>
        </div>
    </div>
    );
};

export default InfoCard;