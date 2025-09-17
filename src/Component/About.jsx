import React from "react";
import Sihab from "./sihab.png";
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
              Halo, perkenalkan nama saya Sihabuddin Rifqi, kamu bisa memanggil saya Sihab. Saya berasal dari Wonosobo, Jawa Tengah. Umur
              saya saat ini adalah 21 tahun. Saat ini saya masih menempuh pendidikan kuliah S1 semester 7 di
              Universitas Sains Al Qur'an program studi Teknik Informatika. Sembari kuliah saya sekarang juga bekerja menjadi Guru Informatika di MTs Ash-Sholihin Wonosobo.
              <p>
                <br />Saya sangat menyukai hal baru dan memiliki semangat belajar yang tinggi, serta saya akan sangat antusias
                apabila saya mendapatkan tantangan yang lebih menantang untuk
                bersaing di bidang industri.
              </p>
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
