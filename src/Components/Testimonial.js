import React, { useState } from 'react';
import '../Styles/Expertise.css';
import { FaRegCircleLeft } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const testimonials = [
  {
    name: 'Wahab Haider',
    text: 'Working with Huma was a fantastic experience. She understood our requirements and delivered a website that exceeded our expectations. Her attention to detail and creativity are unmatched.'
  },
  {
    name: 'Hammad Hamza',
    text: 'From concept to launch, Huma handled our project with utmost professionalism. The custom WordPress site she developed for us is not only visually stunning but also incredibly user-friendly.'
  },
  {
    name: 'Zubair',
    text: 'Huma\'s ability to blend technical skills with creative design is impressive. She transformed our outdated website into a modern, interactive platform that our customers love.'
  },
  {
    name: 'Sarah Ahmed',
    text: 'I am thrilled with the WooCommerce setup Huma implemented for our online store. Her thorough understanding of e-commerce and user experience has greatly improved our customer satisfaction.'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const index = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const index = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <p>{testimonials[currentIndex].text}</p>
      </div>
      <div className='testFoot'>
      <h4>{testimonials[currentIndex].name}</h4>
      <div className="controls">
        <FaRegCircleLeft onClick={handlePrevClick} />
        <FaRegArrowAltCircleRight onClick={handleNextClick} />
      </div>
      </div>
    </div>
  );
};

export default Testimonial;