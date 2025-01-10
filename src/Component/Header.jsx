import React, { useState, useEffect } from "react";
import "./HeroPortfolio.css";
import { Typewriter } from "react-simple-typewriter";
import Saya from "./foto.png";
import AOS from "aos";

const HeroPortfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="bg-slate-500 dark:bg-gray-600 duration-300 flex items-center lg:h-screen headsec py-20 home ">
      <div className="text-white px-6 lg:px-10 w-full">
        <div className="flex md:flex-row flex-col items-center ">
          <div className="md:w-2/3 mx-auto">
            <p
              data-aos="fade-up"
              className="text-3xl font-medium mb-3 md:text-2xl"
            >
              Hi <span className="text-blue-300">I'm</span>
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="font-bold text-2xl lg:text-3xl"
            >
              S I H A B U D D I N &nbsp;&nbsp; R I F Q I
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-3xl mt-2 sm:text-small"
            >
              I'm{" "}
              <span className="text-2xl font-montserrat font-bold text-blue-300 ">
                <Typewriter
                  words={["Full Stack", "Web Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={200}
                  delaySpeed={180}
                />
              </span>
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-base lg:text-xl md:text-lg mb-3 lg:w-3/4 leading-8 mt-3"
            >
              "Welcome to my portfolio! I am a passionate person, always motivated to continue learning and growing. 
              With a high curiosity and strong dedication, I believe that every challenge is an opportunity to grow 
              towards success. Combining creativity, hard work, and commitment to quality, 
              I continue to strive to give my best in every step of my journey. 
              Let's explore my work and story together!"
            </p>
            {/* Sosmed Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="1100"
              className="flex lg:flex-row gap-5 mt-4 mb-6 sosmed"
            >
              <a
                href="https://www.instagram.com/sihabuddin_rifqi?igsh=aWoxempmOHFydzZl"
                className="uil uil-instagram text-blue-300 hover:scale-110"
              ></a>
              <a
                href="https://www.linkedin.com/in/sihabuddin-rifqi-8490b3279/"
                className="uil uil-linkedin-alt text-blue-300 hover:scale-110"
              ></a>
              <a
                href="https://wa.me/6281325756309"
                className="uil uil-whatsapp text-blue-300 hover:scale-110"
              ></a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              className="flex flex-col lg:flex-row gap-2 mt-4 mb-4 font-medium"
            >
              <button className="lg:py-4 lg:px-6 py-2 px-3 relative rounded-md bg-blue-600 text-white font-bold hover:border hover:bg-transparent hover:text-gray-800">
                <div className="bg-slate-200 rounded-full px-2 animate-ping py-2 absolute  -top-1 -left-1 "></div>
                <a href="https://wa.me/6281325756309">Hire me</a>
              </button>
              <button className="lg:py-4 lg:px-6 py-2 px-3 rounded-md bg-sky-600 text-white font-bold hover:border hover:bg-transparent hover:text-gray-800">
                <a href="">
                  <i className="uil uil-arrow-to-bottom"></i>Download CV
                </a>
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-first md:order-none mt-3 w-[220px] h-[220px] lg:w-[380px] lg:h-[380px]"
          >
            <div className="image-container rounded-full border-5 border-blue-200 bg-white p-2 mx-auto lg:ml-[-20px] heroImg floating">
              <img
                src={Saya}
                alt="saya"
                className="rounded-full w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
