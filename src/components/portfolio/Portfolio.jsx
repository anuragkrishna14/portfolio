import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "SMS Spam Detection System",
    github: "https://github.com/anuragkrishna14/SMS-Spam-Detection-System",
    demo: "#portfolio"
  },
  {
    id: 2,
    image: IMG2,
    title: "Simple Clock",
    github: "https://github.com/anuragkrishna14/Simple-Clock",
    demo: "#portfolio"
  },
  {
    id: 3,
    image: IMG3,
    title: "8 Puzzle Game",
    github: "https://github.com/anuragkrishna14/8-Puzzle-Game",
    demo: "#portfolio"
  },
  {
    id: 4,
    image: IMG4,
    title: "Note Taking Application",
    github: "https://github.com/anuragkrishna14/Note-Taking-Application",
    demo: "#portfolio"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-secondary" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
            
          })
        }        

      </div>

    </section>
  );
};

export default Portfolio;