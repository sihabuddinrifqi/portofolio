import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../project images/sektal.png";
import Project2 from "../project images/mts.png";
import Project3 from "../project images/energy.png";
import Project4 from "../project images/image.png";
const projects = [
  {
    name: "UI/UX Aplikasi Sekretaris Digital",
    image: Project1,
    description:
      "Ini merupakan desain dari aplikasi sekretaris digital yang dibuat dengan figma",
    liveDemo: "https://www.figma.com/proto/CH1hxyjEcykumTEUIUtJ41/Aplikasi-Sektal?page-id=0%3A1&node-id=2-36&viewport=316%2C-625%2C1.23&t=3y0aWICWskRpXHR7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A36",
    repository: "#",
  },
  {
    name: "Website Sistem Informasi Akademik MTs Ash-Sholihin",
    image: Project2,
    description:
      "Website ini berisi landing page, kemudian ada fitur untuk mengelola data siswa, guru, walisiswa, nilai dann presensi",
    liveDemo: "#",
    repository: "https://github.com/sihabuddinrifqi/web-mts",
  },

  {
    name: "Data Analyst Energi",
    image: Project3,
    description:
      "Dashboard hasil analisis data energi menggunakan Python dan Ecxel",
    liveDemo: "#",
    repository: "#",
  },

  {
    name: "Forecasting Harga Telur",
    image: Project4,
    description:
      "Pembuatan sistem prediksi harga telur menggunakan python dengan algoritma LSTM",
    liveDemo: "https://forecasting-telur-wonosobo.streamlit.app/",
    repository: "https://github.com/sihabuddinrifqi/Forecasting-Telur-Wonosobo",
  },
];

const Portfolio = () => {
  return (
    <div className="lg:mx-12 mx-4 my-32 portofolio" id="portfolio" >
      <div className="mb-9 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p
            data-aos="fade-up"
            className="text-lg lg:text-xl font-bold text-headingcolor mb-4 mt-6"
          >
            My Project
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="200"
            className="lg:text-4xl text-2xl text-headingcolor font-semibold"
          >
            Below are some of the <br />
            projects I have made
          </h2>
        </div>
        <button
          data-aos="fade-left"
          data-aos-duration="200"
          className="py-2 px-2 lg:px-3 lg:py-3 text-white bg-pink-400 rounded-md  w-40 sm:w-auto hover:bg-sky-600"
        >
          <a href="https://github.com/sihabuddinrifqi">Visit My Repository</a>
        </button>
      </div>

      {/* project card */}
      <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={`fade-up`}
            data-aos-duration={400 * (index + 1)}
            data-aos-once="false"
            className="max-w-md rounded overflow-hidden shadow-xl hover:bg-slate-200"
          >
            <img src={project.image} alt={project.name} />
            <div className="px-2 py-2">
              <div className="font-bold lg:text-lg text-md mb-2 px-3 mt-3 ">
                {project.name}
              </div>
              <p className="text-gray-700 lg:text-md text-sm overflow-auto h-20  px-3">
                {project.description}
              </p>
            </div>
            <div className="flex mx-2 mb-3 gap-2">
              <span className=" bg-pink-600 rounded px-1 py-1 text-sm font-semibold text-white hover:bg-sky-500">
                <a
                  href={project.liveDemo}
                  className="text-xs lg:text-lg mx-auto"
                >
                  Live Demo
                </a>
              </span>
              <span className=" bg-pink-600 rounded px-1 py-1 text-sm font-semibold text-white  hover:bg-sky-500">
                <a
                  href={project.repository}
                  className="text-xs lg:text-lg mx-auto"
                >
                  Repositories
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link to="https://github.com/sihabuddinrifqi">
        <button
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="py-3 mt-9 px-4 text-white bg-sky-400 rounded-md sm:w-auto hover:bg-sky-600 mx-auto  flex justify-center"
        >
          Visit More Portfolio
        </button>
      </Link>
    </div>
    
  );
};

export default Portfolio;
