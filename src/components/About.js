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
        <div className="flex gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[650px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* <div> */}
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className=" mb-4">
              I am a full stack developer with a background in machine learning.
              I have a passion for building and designing applications. I am a
              self-taught developer who is always looking for new challenges.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              autem quasi ullam numquam suscipit quidem libero culpa impedit
              exercitationem ducimus unde mollitia rerum assumenda dolor cum,
              quo inventore porro quod?
            </p>
            {/* </div> */}
            {/* stats */}
            <div className=" flex gap-x-7 lg:gap-x-20 mb-22">
              <div className="">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-2px]">
                  Satisfied customers
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
