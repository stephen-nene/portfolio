import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-auto bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div>
            <div>
            <h2>About me.</h2>
            <h3>
              I am a full stack developer with a background in machine learning.
              I have a passion for building and designing applications. I am a
              self-taught developer who is always looking for new challenges.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              autem quasi ullam numquam suscipit quidem libero culpa impedit
              exercitationem ducimus unde mollitia rerum assumenda dolor cum,
              quo inventore porro quod?
            </p>
            </div>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
