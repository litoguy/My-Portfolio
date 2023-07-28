import React from 'react';
import "./about.css";
import Abimage from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Abimage} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I'm a software engineer based in Ghana with 2 years of experience in the software industry. My focus area for the past few years has been front-end development with Bootstrap 5, but I'm also skilled in back-end development with php working on adding the Laravel library .Currently I’m migrating to react for front-end and NODE-JS for backend</p>
             <a href="#resume" className="btn">Download Resume</a>
          </div>
          <div className="about_skill grid">
            <div className="skill_data">
              <div className="Skill_title">
                <h3 className="skill_name">Development</h3>
                  <span className="skill_number development">90%</span>
              </div>
              <div className="skill_bar">
                <span className="skill_percentage"></span>
              </div>
            </div>

            <div className="skill_data">
              <div className="Skill_title">
                <h3 className="skill_name">Database</h3>
                  <span className="skill_number development">90%</span>
              </div>
              <div className="skill_bar">
                <span className="skill_percentage"></span>
              </div>
            </div>

            <div className="skill_data">
              <div className="Skill_title">
                <h3 className="skill_name">UI/UX</h3>
                  <span className="skill_number development">90%</span>
              </div>
              <div className="skill_bar">
                <span className="skill_percentage"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About