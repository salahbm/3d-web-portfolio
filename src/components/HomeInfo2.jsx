import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const HomeInfo2 = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    {
      jsx: (
        <h1 className='text-md md:text-xl  text-center neo-brutalism-blue py-2 px-8 text-white mx-5'>
          Hi there! I'm
          <span className='font-semibold mx-2 text-white'>Muhammad (aka Salah)</span>
          👋
          <br />
          Your Full-stack Web & Mobile Magician
        
        </h1>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <span className='font-medium text-md md:text-xl text-center'>
            Crafting digital experiences with a touch of elegance. <br /> Seasoned with expertise from diverse collaborations.
          </span>
               </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <span className='font-medium text-center text-md md:text-xl'>
            Leading projects to success, one innovation at a time. <br /> Witness the transformational journey!
          </span>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <span className='font-medium text-md md:text-xl text-center'>
            Got a project in mind or seeking a coding ally? <br /> Let's bring your vision to life!
          </span>
          <Link to='/contact' className='neo-brutalism-white neo-btn'>
            Let's talk
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <span className='font-medium text-center text-md md:text-xl'>
            Transforming complex problems into elegant solutions. <br /> Innovation is my playground!
          </span>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <span className='font-medium text-center text-md md:text-xl'>
            Coding is not just a job; it's a creative expression. <br /> Every line of code tells a story!
          </span>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <span className='font-medium text-center text-md md:text-xl'>
            Embracing challenges with a passion for continuous learning. <br /> Let's push boundaries together!
          </span>
        </div>
      ),
      duration: 5000,
    },
  ];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex < texts.length - 1 ? prevIndex + 1 : 0));
    }, texts[currentTextIndex].duration);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return texts[currentTextIndex].jsx;
};

export default HomeInfo2;
