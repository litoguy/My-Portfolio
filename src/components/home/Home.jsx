import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Design from './Design';



const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <motion div />
        <h1 className="home_name">Bethel S. Fiagbetor</h1>
        <span className="home_education">I'm a Full-stack developer</span>

        <HeaderSocials />
        <a href="#contact" className="btn">Hire me</a>
        <ScrollDown />
      </div>
    <Design />
    </section>
  )
}

export default Home