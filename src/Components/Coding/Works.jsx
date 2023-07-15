import React from "react";
import image1 from "../../Assets/firstWork-min.jpg";
import image2 from "../../Assets/secondWork-min.jpg";
import image3 from "../../Assets/thirdwork-min.jpg";
import { SiNetlify, SiGithub } from "react-icons/Si";

const workData = [
  {
    name: "Very First Work",
    link1: "https://first-practice-webpage.netlify.app/",
    link2: "https://github.com/Silmaril1on/myFirstProject",
    image: image1,
    desc: "This is my first 'project' with a simple HTML and CSS. No responsive no  other features because of less knowledge. it is simply upgradable for me, because now i know much more then before, back in time when i was doing this. This project is a reminder for me that day by day i am gettig more knowledge than the previous one. Every single day is a progress, and for that struggling times, it tells me, that every problem has a solution...  ",
  },
  {
    name: "After JAVASCRIPT",
    link1: "https://game-rate-webpage.netlify.app/",
    link2: "https://github.com/Silmaril1on/Game-Rate-Webpage",
    image: image2,
    desc: "Hello JAVASCRIPT.. now it is  time to simplify all the previous works with this thing. experience is getting easier every day with JS. it's more sophisticate than previous project with a bunch of coding lines. I still don't know what's coming next, after javascript. I mean REACT. I'll be in touch with REACT soon.",
  },
  {
    name: "Hello REACT",
    link1: "https://dota2-page.netlify.app/",
    link2: "https://github.com/Silmaril1on/Dota2-Page",
    image: image3,
    desc: "Abundance of simplicity. REACT made every other things pretty easier. Working with it's   built in libraries is getting better and better. Let's see what makes me admire after REACT. See you soon guys. ",
  },
];

function Works() {
  return (
    <div className="works-container">
      <div>
        {workData.map((item, index) => {
          const { link1, link2, name, image, desc } = item;
          return (
            <div className="works-item" key={index}>
              <h2>{name}</h2>
              <a href={link1} target="_blank">
                <div className="works-img-div">
                  <img src={image} alt="image" />
                </div>
              </a>
              <div className="works-content-div">
                <a href={link1} target="_blank">
                  <SiNetlify /> {link1}
                </a>
                <a href={link2} target="_blank">
                  <SiGithub /> {link2}
                </a>
                <h3>{desc}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
