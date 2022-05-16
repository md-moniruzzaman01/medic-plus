import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ReviewCard from './ReviewCard';
const Testimonials = () => {
  const reviews =  [
        
        {
          "_id": "624ab6c1ed6449d1f5c91972",
          "picture": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLPT1p9cHKymNftTpi-SWBxHJ8GSCETSCSUIZlWmyX-nUS6qkmijFkskJ2ePNjFMc7zStq_GPzGcJJBGQgs1V0wbUKRGRq-EwBT_q4OahGGxa2aQPfiIs_-bLIrzp_vpmnEbJNSxfMFXpCiMbEu2kq4Evt8X2gvh_c5L6SZ5kB5KCTxjw_23JDDcggkg/s1600/13.jpg",
          "name": "Naomi Bell",
          "company": "ZYTREK",
          "rating": 4.8,
          "email": "naomibell@zytrek.com",
          "body": "Perfume is awesome! The best on the net! I will refer everyone I know. Perfume has completely surpassed our expectations."
        },
        {
          "_id": "624ab6c1594bb9b66ee64100",
          "picture": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdwLIPTabPZtft3-d9injA6Nbc1yAY3-6Q64_LKCmrrqX5luHKPurMwi7Xd0hz-b9V2sdiB60RA6L7JRU82RSmNjEZ5tvB0Kh4812nufoYYTjPdqUTieuyFxbE23PNzmIMZmL9JW_Tmm_51Un-v_zaZn7n7aOHgBbZBnDqqvulexzoNmG40amcMZXjCQ/s1600/60.jpg",
          "name": "Shari Robles",
          "company": "EDECINE",
          "rating": 5,
          "email": "sharirobles@edecine.com",
          "body": "I don't know what else to say. I could probably go into sales for you."
        },
        {
          "_id": "624ab6c16bf877098417ef1d",
          "picture": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWEOBZhm2O4sX-qJ2Jfqu0_6eSyWBpwTmGt3omuld-WHxrob30ALHAOyHR-m9Twzp2HSJJL3hfhAQUQW9giscSy4ehEFSbwCaguHmib7DmoAj19YhQ-iI6ttfI2Y-rOrcW4vd0pmxI1XuCKZR3u73_T0jFrTICVVVhKXRDjHBJ_NYG7Yoo70BDEDFeeA/s1600/83.jpg",
          "name": "Nicole Barrett",
          "company": "REVERSUS",
          "rating": 4.5,
          "email": "nicolebarrett@reversus.com",
          "body": "Perfume was the best investment I ever made. I STRONGLY recommend perfume to EVERYONE interested in running a successful online business! Just what I was looking for. It's really wonderful."
        },
        {
          "_id": "624ab6c1d645b3ce34bd7e84",
          "picture": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ0qkeCKE0QnqUTFtrik0Idi_YW0bn7k25ssV8q1pea8sEZviuRiqwTkKerMv0PNk29R9WapKMRA9IsBbtwX8RHNdhAfoNiJ3KiFddaA0E1p3sj-WgJUxa2MPwIe6tF0nqv2O_u0t2Jbn0_0BozdettAD3woMrNxo2BwN_jc2jGEoeos0Fd59mNneCAw/s1600/42.jpg",
          "name": "Katy Wilkerson",
          "company": "OZEAN",
          "rating": 5,
          "email": "katywilkerson@ozean.com",
          "body": "This is simply unbelievable! Definitely worth the investment. Perfume was worth a fortune to my company. You guys rock!"
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
                slidesToShow: 3,
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
        <div className='min-h-screen container mx-auto'>
            <h1 className='text-3xl font-semibold mb-11 text-center'>Our Happy customar</h1>
             
             <Slider {...settings}>
            
            {
                reviews.map(review=> <ReviewCard key={review._id} review={review}></ReviewCard>)
            }
            </Slider>
             
        </div>
    );
};

export default Testimonials;