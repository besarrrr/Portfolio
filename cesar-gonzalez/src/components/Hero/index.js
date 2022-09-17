import React from 'react';
import coverImage from "../../assets/cover/image1.jpeg";

function Hero() {
  return (
    <section className="my-5 hero">
          <div className="hero-text">
            <h3>Web Developer: Full Stack</h3>
        </div>
        <img src={coverImage} className="my-2" style={{ width: "35%" }} alt="cover" />
    </section>
  );
}

export default Hero;