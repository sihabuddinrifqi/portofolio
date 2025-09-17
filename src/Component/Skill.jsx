import React from "react";
import "./HeroPortfolio.css";
import Html from "../logo skill/html.png";
import Css from "../logo skill/css.png";
import Javascript from "../logo skill/javascript.png";
import Php from "../logo skill/php.png";
import Tailwind from "../logo skill/tailwindcss.svg";
import Riek from "../logo skill/reactjs.png";
import Bootstrap from "../logo skill/bootstrap.png";
import Canva from "../logo skill/canva.png";
import Laravel from "../logo skill/laravel-2.svg";
import Figma from "../logo skill/figma.svg";
import Python from "../logo skill/python.png";
import PS from "../logo skill/ps.svg";

const skills = [
  { name: "Html", logo: Html, level: "Intermediate" },
  { name: "Css", logo: Css, level: "Intermediate" },
  { name: "Javascript", logo: Javascript, level: "Beginner" },
  { name: "Php", logo: Php, level: "Beginner" },
  { name: "Tailwind", logo: Tailwind, level: "Beginner" },
  { name: "React", logo: Riek, level: "Beginner" },
  { name: "Python", logo: Python, level: "Intermediate" },
  { name: "Bootstrap", logo: Bootstrap, level: "Intermediate" },
  { name: "Laravel", logo: Laravel, level: "Beginner" },
  { name: "Figma", logo: Figma, level: "Intermediate" },
  { name: "Canva", logo: Canva, level: "Expert" },
  { name: "Photoshop", logo: PS, level: "Intermediate" },
];

const Skill = () => {
  return (
    <div>
      <section className="flex items-center justify-center sm:h-screen md:h-auto skill">
        <div className="mx-auto px-5 mb-3">
          <div className="mt-10">
            <h2
              data-aos="fade-up"
              className="font-bold text-4xl text-center mt-4"
            >
              MY{" "}
              <span className="skl" data-text="Skill">
                Skill
              </span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 mb-5 text-2xl text-balance">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos={`fade-up`}
                  data-aos-duration={250 * (index + 1)}
                  className="px-1 text-center rounded shadow-lg hover:bg-blue-400"
                >
                  <div className="w-24 h-24  mt-3 mx-auto">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-20 h-20 lg:w-full lg:h-full object-cover mx-auto"
                    />
                  </div>
                  <h1 className="font-bold text-gray-800 mb-3 text-sm lg:text-lg">
                    {skill.name}
                  </h1>
                  <p className="text-gray-800 mb-3 font-semibold text-sm lg:text-md">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
