import React from "react";
import Sihab from "./fotoformal3x4.jpeg";
import "./HeroPortfolio.css";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section className="items-center justify-center about h-screen">
      <div className="container mx-auto px-4 py-4 mt-8">
        <h1
          data-aos="fade-up"
          className="lg:text-4xl font-bold text-center text-3xl "
        >
          About <span className="text-pink-600">Me</span>
        </h1>
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:text-3xl font-semibold text-gray-700 text-center mt-1 mb-3 text-2xl"
        >
          <Typewriter
                          words={["My Introduction"]}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={200}
                          deleteSpeed={200}
                          delaySpeed={180}
                        />
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            src={Sihab}
            alt=""
            className="rounded-full border-4 border-pink-400 h-52 w-52 lg:h-96 lg:w-96 lg:mr-10 mt-2 lg:mb-0 object-cover "
          />
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center lg:text-left mt-4"
          >
            <h1 className="font-bold text-3xl mb-2 mt-1 lg:text-4xl">
              Tentang <span className="text-pink-600">Saya</span>
            </h1>
            <p className=" lg:text-xl lg:w-4/6 sm:text-sm text-justify">
              Halo, perkenalkan nama saya Sihabuddin Rifqi, Lulusan S1 Teknik Informatika Universitas Sains Al Qur'an (IPK 3.94) dengan spesialisasi dalam Web Development dan Machine
              Learning. Berpengalaman sebagai Asisten Dosen dan Guru Informatika, serta memiliki rekam jejak akademik dibuktikan melalui
              publikasi riset terindeks Sinta 3. Pernah mengikuti pelatihan Junior Web Developer oleh BPSDMP Kominfo dan Asah Machine
              Learning by Dicoding. Berdedikasi, analitis, dan siap memberikan kontribusi nyata dalam pengembangan solusi teknologi
              perusahaan.
            </p>
            <h1 className="font-bold text-2xl mb-4">
              Hobby <span className="text-pink-600">Saya :</span>{" "}
              <span className="text-xl">Diskusi Santai</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
