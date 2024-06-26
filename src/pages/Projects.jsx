import { Link } from 'react-router-dom';

import CTA from '../components/CTA';
import { arrow } from '../assets/icons';
import { projects } from '../constant/skills';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full " key={project.name}>
            <div className="flex flex-row items-center gap-5">
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconsUrl}
                    alt="threads"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              {project?.images ? (
                <div className="flex items-center flex-row w-1/4 h-1/4">
                  {project?.images.map((item, i) => (
                    <img
                      key={i}
                      src={item}
                      alt="threads"
                      className="object-cover h-full w-full m-1"
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 overflow-y-auto max-h-[150px] md:max-h-[250px]">
                {project.description}
              </p>

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.linkWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <div className="mt-1 flex items-center gap-2 font-poppins">
                <Link
                  to={project.linkGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  GitHub Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
