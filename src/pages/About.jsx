import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from 'react';
import { Back, Front, langAndState, UI } from '../constant/techList';
import CTA from '../components/CTA';
import { experiences } from './../constant/experience';

const About = () => {
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Enable animation on value change
    setAnimate(true);

    // Disable animation after a short delay
    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [progress]);

  const handleChange = (value) => {
    if (!isNaN(value) && value >= 1 && value <= 5) {
      setProgress(value);
    }
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {' '}
          Muhammad
        </span>{' '}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Seoul, South Korea, specializing in
          technical education through hands-on learning and building
          applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text font-bold  text-center">My Skills</h3>
        <hr className="text-neutral-600 my-2" />
        <div className="flex flex-col items-center">
          <label className="text-neutral-600">
            Skill Ratio: {(progress / 5) * 100}%
          </label>

          <div
            className={` relative ${
              animate ? 'duration-500 ease-in-out transform' : ''
            }`}
            style={{
              width: `${(progress / 5) * 100 > 0 ? (progress / 5) * 100 : 5}%`,
              background: 'linear-gradient(to right, #3498db, #2ecc71)',
              height: '20px',
              marginTop: '10px',
              borderRadius: 12,
            }}
          >
            {/* Current skill rate */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
              <span className="text-white">{progress}</span>
            </div>
          </div>
        </div>
        <hr className="text-neutral-600 my-2" />
        <p className="subhead-text">Language/State/Git</p>
        <div className="mt-16 flex flex-wrap gap-12">
          {langAndState.map((skill) => (
            <div
              className="block-container w-20 h-20 cursor-pointer"
              key={skill.name}
              onClick={() => handleChange(skill.level)}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center flex-col p-2">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <p className="blue-gradient_text my-1 text-sm whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-neutral-600 my-2" />
        <p className="subhead-text">Front-End</p>
        <div className="mt-16 flex flex-wrap gap-12">
          {Front.map((skill) => (
            <div
              className="block-container w-20 h-20"
              key={skill.name}
              onClick={() => handleChange(skill.level)}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center flex-col p-2">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <p className="blue-gradient_text my-1 text-sm whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-neutral-600 my-2" />
        <p className="subhead-text">Back-End</p>
        <div className="mt-16 flex flex-wrap gap-12">
          {Back.map((skill) => (
            <div
              className="block-container w-20 h-20"
              key={skill.name}
              onClick={() => handleChange(skill.level)}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center flex-col p-2">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <p className="blue-gradient_text my-1 text-sm whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-neutral-600 my-2" />
        <p className="subhead-text">UI</p>
        <div className="mt-16 flex flex-wrap gap-12">
          {UI.map((skill) => (
            <div
              className="block-container w-20 h-20"
              key={skill.name}
              onClick={() => handleChange(skill.level)}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center flex-col p-2">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                <p className="blue-gradient_text my-1 text-sm whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
