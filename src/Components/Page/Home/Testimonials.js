import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ExpartCard from './ExpartCard';
import expart1 from "../../../image/x1.png.pagespeed.ic.2EznENOFkd.webp"
import expart2 from "../../../image/x2.png.pagespeed.ic.IG-jB4LJxU.webp"
import expart3 from "../../../image//x3.png.pagespeed.ic.ShbXP_lpvJ.webp"
import expart4 from "../../../image/x4.png.pagespeed.ic.qkGIuOxLyX.webp"

const Testimonials = () => {
  const exparts =  [
        
        {
          _id: "624ab6c1ed6449d1f5c91972",
          picture: expart1,
          "name": "Naomi Bell",
          
          body: "Neurologist"
        },
        {
          _id: "624ab6c1594bb9b66ee64100",
          picture: expart2,
          name: "Shari Robles",
          body: "Neurologist"
        },
        {
          _i: "624ab6c16bf877098417ef1d",
          picture: expart3,
          name: "Nicole Barrett",
          
          body: "Neurologist"
        },
        
        {
          _id: "624ab6c1d645b3ce34bd7e84",
          picture: expart4,
          name: "Katy Wilkerson",
          
          body: "Neurologist"
        }
      ]


      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div  className='mt-20 container mx-auto max-w-7xl'>
            <h1 className='text-3xl font-semibold mb-11 '>Expert Doctors</h1>
             
             <Slider {...settings} >
            
            {
                exparts.map(expart=> <ExpartCard expart={expart}></ExpartCard>)
            }
            </Slider>
             
        </div>
    );
};

export default Testimonials;