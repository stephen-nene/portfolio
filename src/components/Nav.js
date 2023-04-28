import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import {
  FcGraduationCap,
  FcOrganization,
  FcIdea,
  FcContacts,
  FcNews,
  FcBusinessman,
} from "react-icons/fc";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed  bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full   bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-white/50">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <FcBusinessman />
          </Link>
          <Link
            to="education"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <FcGraduationCap />
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <FcIdea />
          </Link>
          <Link
            to="certifications"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <TbCertificate />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <FcOrganization />
          </Link>
          <Link
            to="blogs"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <FcNews />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer w-[60px] flex items-center justify-center"
          >
            <FcContacts />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
