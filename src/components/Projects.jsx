import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import project1 from "../assests/images/aiccit.png";
import project2 from "../assests/images/weather.png";
import project3 from '../assests/images/dropcount.png'
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold " data-aos="fade-right">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg" data-aos="fade-right">
          My awesome works
        </p>
        <div className=" flex justify-center mt-12 gap-6">
          <div
            className="flex items-center justify-center mt-12  flex-row flex-wrap gap-10 "
            data-aos="fade-up"
          >
            <div className="border-2 border-cyan-600 rounded-xl p-4 text-xl w-[35rem] font-poppins flex flex-col gap-5 justify-center bg-gray-900">
              <div className="flex justify-start items-center">
                <img src={project1} className="rounded-lg" />
              </div>

              <div className="flex flex-col font-bold leading-6 gap-3">
                <h2 className="text-3xl">AICCIT-2023</h2>
                <h2 className="text-xl">
                  Website Link -{" "}
                  <a
                    href="https://aiccit2023.vercel.app/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Link
                  </a>
                </h2>
              </div>
            </div>

            <div className="border-2 border-cyan-600 rounded-xl p-4 text-xl w-[35rem] font-poppins flex flex-col gap-5 justify-center bg-gray-900">
              <div className="flex justify-start items-center">
                <img src={project2} className="rounded-lg" />
              </div>

              <div className="flex flex-col font-bold leading-6 gap-3">
                <h2 className="text-3xl">Weather Application</h2>
                <h2 className="text-xl">
                  Website Link -{" "}
                  <a
                    href="https://weather-pi-khaki.vercel.app/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Link
                  </a>
                </h2>
              </div>
            </div>

            <div className="border-2 border-cyan-600 rounded-xl p-4 text-xl w-[35rem] font-poppins flex flex-col gap-5 justify-center bg-gray-900">
              <div className="flex justify-center items-center">
                <img src={project3} className="rounded-lg" />
              </div>

              <div className="flex flex-col font-bold leading-6 gap-3">
                <h2 className="text-3xl">Drop Count</h2>
                <h2 className="text-xl">
                  GitHub Link -{" "}
                  <a
                    href="https://github.com/sai-ram-kaushik/DropCount"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Link
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
