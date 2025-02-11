import { useState, useEffect } from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {MdWorkOutline} from "react-icons/md";
import {BiMessageSquareDetail} from "react-icons/bi";

const Nav = () => {

  const [activeNav, setActiveNav] = useState("/#");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#", offset: 0 },
        { id: "#about", offset: document.querySelector("#about")?.offsetTop || 0 },
        { id: "#experience", offset: document.querySelector("#experience")?.offsetTop || 0 },
        { id: "#portfolio", offset: document.querySelector("#portfolio")?.offsetTop || 0 },
        { id: "#contact", offset: document.querySelector("#contact")?.offsetTop || 0 },
      ];

      const scrollPosition = window.scrollY + window.innerHeight/2; // Adjust for desired offset
      const current = sections
        .reverse() // Reverse to prioritize the nearest section
        .find((section) => scrollPosition >= section.offset);

      if (current) setActiveNav(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav>
      <a href="#" className={activeNav === "#"? "active" : ""} onClick={()=>setActiveNav("#")}><AiOutlineHome/></a>
      <a href="#about" className={activeNav === "#about"? "active" : ""} onClick={()=>setActiveNav("#about")}><AiOutlineUser/></a>
      <a href="#experience" className={activeNav === "#experience"? "active" : ""} onClick={()=>setActiveNav("#experience")}><BiBook/></a>
      <a href="#portfolio" className={activeNav === "#portfolio"? "active" : ""} onClick={()=>setActiveNav("#portfolio")}><MdWorkOutline/></a>
      <a href="#contact" className={activeNav === "#contact"? "active" : ""} onClick={()=>setActiveNav("#contact")}><BiMessageSquareDetail/></a>
    </nav>
  );
};

export default Nav;
