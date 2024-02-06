import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from 'react';
import CTA from '../components/CTA';
import { experiences } from '../constant/experience';

const Experience = () => {
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
      <h1 className="head-text text-yellow-300">
        Professional
        <span className="blue-gradient_text font-semibold drop-shadow">
          {' '}
          Work Experience
        </span>{' '}
        🗂️
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Experience;
