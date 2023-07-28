import React from 'react'

function AboutBox() {
  return (
    <div className="about_box grid">
        <div className="about_box">
            <i className="about_icon icon-fire"></i>
            <div>
                <h3 className="about_title">198</h3>
                <span className="about_subtitle">Project Completed</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-cup"></i>
            <div>
                <h3 className="about_title">5730</h3>
                <span className="about_subtitle">Cup of Coffee</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-badge"></i>
            <div>
                <h3 className="about_title">5</h3>
                <span className="about_subtitle">Award Nomination</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-people"></i>
            <div>
                <h3 className="about_title">5</h3>
                <span className="about_subtitle">Satisfied Clients</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox