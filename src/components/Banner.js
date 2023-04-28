import React from "react";

import Image from "../assets/avatar.svg";

import { FaGithub, FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

// import { motion } from "framer-motion";

// import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto mr-auto">
        <div>
          {/* text */}
          <div>
            <h1>
              STEPHEN <span>NENE</span>
            </h1>
            <div className="mb-6 text-[34px] lg:text-[60px] font font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I work in </span>
              <TypeAnimation
                sequence={[
                  "Backend",
                  2000,
                  "FrontEnd",
                  2000,
                  "CyberSecurity",
                  2000,
                ]}
                speed={30}
                style={{ color: 'rgb(56,171,37)' }}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                The least experienced can be the most experienced too.
              </p>
            <div className="flex max-w-max gap-x-10 items-center mb-12 mx-auto lg:mx-0">
              <button href="#contact" className="btn btn-lg">Contact-me</button>
              <a href="#ee" className="text-gradient btn-link">Resume</a>
            </div>

            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:ms-0">
              <a href="https://github.com/stephen-nene">
                <FaGithub/>
              </a>
              <a href="#2">
                <FaLinkedin/>
              </a>
              <a href="#2">
                <FaDiscord/>
              </a>
              <a href="#2">
                <FaTwitter/>
              </a>
            </div>

          </div>
          {/* image */}
          <div>
            <p>my picture</p>
            <img src={Image} alt="landing page" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
