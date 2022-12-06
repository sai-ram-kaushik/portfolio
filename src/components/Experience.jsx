import React, { useEffect } from "react";
import { MdDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold" data-aos="fade-right">
          My <span className="text-cyan-600">Experience</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg" data-aos="fade-right">
          My awesome works
        </p>
        <div
          className="flex items-center justify-center mt-12  flex-row flex-wrap gap-10 "
          data-aos="fade-up"
        >
          <div className="border-2 border-cyan-600 rounded-xl p-4 text-xl w-[35rem] font-poppins flex gap-5 justify-center bg-gray-900">
            <div className="flex justify-start items-center">
              <MdDeveloperMode className="text-6xl" />
            </div>
            <div className="flex flex-col font-bold leading-6">
              <h2 className="text-3xl">Frontend Developer Intern</h2>
              <p className="text-[12px] flex">
                Manav Rachna International Institute of Research and Studies
              </p>
              <p className="flex text-[12px]">June, 22 - October, 22</p>
            </div>
          </div>

          <div className="border-2 border-cyan-600 rounded-xl p-4 text-xl w-[35rem] font-poppins flex gap-5 justify-center bg-gray-900">
            <div className="flex justify-start items-center">
              <MdOutlineDesignServices className="text-6xl" />
            </div>
            <div className="flex flex-col font-bold leading-6">
              <h2 className="text-3xl">Graphic Design Lead</h2>
              <p className="text-[12px] flex">Sudan's Technocrat Foundation</p>
              <p className="text-[12px] flex">April, 22 - October, 22</p>
            </div>
          </div>

          <div className="border-2 border-cyan-600 rounded-xl p-4 text-xl w-[35rem] font-poppins flex gap-5 justify-center bg-gray-900">
            <div className="flex justify-start items-center">
              <MdOutlineDesignServices className="text-6xl" />
            </div>
            <div className="flex flex-col font-bold leading-6">
              <h2 className="text-3xl">Graphic Design Lead</h2>
              <p className="text-[12px] flex">Google Developer Student Clubs, MRIIRS</p>
              <p className="text-[12px] flex">August, 22 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
