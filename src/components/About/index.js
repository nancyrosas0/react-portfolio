import React from "react";
import profilePic from "../../assets/images/Nancy.png";
import Footer from "../Footer";

function About() {
  return (
    <section className="my-5">
      <div className="container d-flex flex-column text-center">
        <div className="p-2">
          <h1 id="about">I'm Nancy. Welcome to my page.</h1>
          <img
            src={profilePic}
            className="my-2"
            style={{ width: "100%" }}
            alt="Nancy"
          />
        </div>
        <div className="p-2">
          <p className="aboutMe">
            HR Manager with a penchant for learning, I decided to learn to code. I had never tried my hand at something as logical as web development, but here I am, unscathed from an intense six-month bootcamp. 
            In my free time, when I'm not putting out fires, I like to check out breweries, museums, and cleanse my chakras. Feel free to stay on my page a while. Or, if you're interested, drop me a line. Chat soon. 
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default About;