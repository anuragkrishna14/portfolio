import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Anurag Krishna</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/anuragkrishna1402" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/anurag__krishna" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://x.com/anurag__krishna" target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>Anurag Krishna &copy;. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
