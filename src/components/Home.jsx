import React from "react";
import pic from "../assets/react.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const social_media = [
    { icon: "logo-github", link: "https://github.com/ltc01" },
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/laxmi-c-845099188/" },
    { icon: "logo-instagram", link: "https://www.instagram.com/heyyy_laxmiiiiiiiiiiii/" },
    { icon: "logo-twitter", link: "https://twitter.com/LaxmiiiC" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center md:pt-28 md:px-40 justify-center md:justify-start"
    >
      {/* <div className="flex-1 flex items-center justify-center h-full">
      <img src={pic} alt="" className='md:w-1/3 bg-black object-cover' />
    </div> */}

      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-white leading-10 md:text-5xl md:leading-normal">
          <span className="text-blue-500 md:text-6xl text-5xl">
            Hi there!👋
            <br />
          </span>
          I'm <span>Laxmi Chaudhary.</span>
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Passionate Full Stack Web Developer.
        </h4>

        <button className="btn-primary font-semibold hover:animate-pulse hover:bg-blue-500 mt-8">
          Download CV
        </button>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          {social_media.map((icon) => (
            <div
              key={icon.icon}
              className="text-gray-600 hover:text-white cursor-pointer"
            >
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name={icon.icon}></ion-icon>
              </a>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
