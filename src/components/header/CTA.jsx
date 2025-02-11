import RESUME from "../../assets/AnuragKrishna-Resume.pdf";
import { PiChatCircleDotsBold } from "react-icons/pi";

const CTA = () => {
  return (
    <div className="cta">
        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
        <a href="#contact" className="btn">Say Hello <span><PiChatCircleDotsBold /></span></a>
    </div>
  );
}

export default CTA;