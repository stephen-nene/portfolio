import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const schools = [
  {
    name: "Moringa School",
    description: "The least experienced can be the most experienced too. Dont fight back , fight forward.",
    start: "2022",
    end: "2024"
  },
  {
    name: "Moringa School",
    description: "The least experienced can be the most experienced too. Dont fight back , fight forward.",
    start: "2022",
    end: "2024"
  },
  {
    name: "Moringa School",
    description: "The least experienced can be the most experienced too. Dont fight back , fight forward.",
    start: "2022",
    end: "2024"
  },
]

const Education = () => {
  return (
    <div className='section' id='education' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {/* text */}
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' >
            <h2 className='h2 text-accent mb-5'>Where i got educated</h2>
            <h3 className='h3 max-w-[455px] mb-15'>mostly it is self taught but i still value the learning instititutions i attended</h3>
          </div>

          {/* schools */}
          <div className='flex-1'>
            {/* school txt */}
            <div className=''>
              {schools.map((school, index) => {
                return (
                  <div 
                  className='border-b border-white/20 h-[146px]vmb-[38px] flex' 
                  key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-7'>{school.name}</h4>
                      <p className='font-secondary leading-tight mb-4'>{school.description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#"><BsArrowUpRight/>date</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
