import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const HomeInfo2 = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    {
      jsx: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
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
          <p className='font-medium sm:text-xl text-center'>
            Crafting digital experiences with a touch of elegance. <br /> Seasoned with expertise from diverse collaborations.
          </p>
       
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Leading projects to success, one innovation at a time. <br /> Witness the transformational journey!
          </p>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Got a project in mind or seeking a coding ally? <br /> Let's bring your vision to life!
          </p>
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
          <p className='font-medium text-center sm:text-xl'>
            Transforming complex problems into elegant solutions. <br /> Innovation is my playground!
          </p>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Coding is not just a job; it's a creative expression. <br /> Every line of code tells a story!
          </p>
        </div>
      ),
      duration: 5000,
    },
    {
      jsx: (
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Embracing challenges with a passion for continuous learning. <br /> Let's push boundaries together!
          </p>
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
