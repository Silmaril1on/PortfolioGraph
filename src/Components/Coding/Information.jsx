import React from "react";
import languages from "./codingData";
import "./coding.css";

function Information() {
  return (
    <section className="lang-section-container">
      <div>
        {languages.map((item, index) => {
          return (
            <div className="lang-container" key={index}>
              <div className="row-container">
                <div className="logo-div">{item.image} </div>
                <div className="lang-content">
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div className="courses-container">
                {item.course.map((cou, index) => {
                  return (
                    <div key={index}>
                      <a href={cou.link} target="_blank">
                        <div className="image-div">
                          <img src={cou.logo} alt="" />
                        </div>
                        <h2>{cou.name}</h2>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Information;
