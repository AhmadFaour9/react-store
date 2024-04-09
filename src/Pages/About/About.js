import React from "react";
import "./About.css";
import { useSelector } from "react-redux";
const About = () => {
  const isRealyDark = useSelector((state) => state.counter.isDark);
  return (
    <>
      <div
        className={
          isRealyDark == true
            ? "container-fluid light2"
            : " container-fluid dark2"
        }
      >
        <div className="row hero-about">
          <div className="about-content">
            <div className="about-headline">
              <h1>we love</h1>
              <button
                className={
                  isRealyDark == true ? "about-btn light" : "about-btn dark"
                }
              >
                comfy
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus,
              quia optio aut! Perferendis ipsa cumque ipsam nostrum
              reprehenderit ad illo sed officiis ea tempore! Similique eos
              minima sit porro, ratione aspernatur!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
