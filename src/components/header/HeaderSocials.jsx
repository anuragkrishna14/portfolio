import {FiInstagram} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://instagram.com/anurag__krishna" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://linkedin.com/in/anuragkrishna14" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/anuragkrishna14" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  );
}

export default HeaderSocials;