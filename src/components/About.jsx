import React, { useEffect } from "react";
import about from "../assests/images/sideImage.png";
import Aos from "aos";
import 'aos/dist/aos.css';
const About = () => {

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold " data-aos="fade-right">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-500 my-3 text-lg" data-aos="fade-right">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse item-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="text-gray-300 my-3 ">
              <p className="text-justify leading-8 font-sans" data-aos="fade-right">
                My name is Sairam Kaushik, and I'm a third-year student pursuing
                bachelor's of technology in computer science with a
                specialization in digital forensics and cybersecurity. I
                currently work for a college-based startup that is focuses in
                building an elderly matrimonial site. I'm a passionate frontend
                developer [using the MERN stack], also a graphic designer having
                experience with tools like figma, photoshop, Adobe premiere pro
                etc. Furthermore, I'm interested in cyber security. I enjoy
                learning about new cyber attacks, playing CTF, and trying out
                different security tools. In addition to technical work, I also
                remain busy with a variety of extracurricular activities. I am
                the team leader for the graphics and design team at the
                international hackathon "HACK THE MOUNTAINS 3.0." . At Google
                Developer Student Clubs MRIIRS, I am also assigned the role of
                design head. My confidence and leadership abilities have grown
                as a result of being a part of such a community with like-minded
                people.Lastly, I regularly go to technical meetups and broaden
                my network with professionals at the industry's top levels. This
                helps me maintain my dedication of improving myself every day.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm" data-aos="fade-down">
              <img
                src={about}
                alt="about_image"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
