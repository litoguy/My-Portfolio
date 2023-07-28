import React from 'react'

function ScrollDown() {
  return (
    <div className="scroll_down">
        <a href="#about" className="mouse_wrapper">
            <span className="home_scroll-name"><i class="fa-solid fa-angle-down"></i></span>
                <span className="mouse">
                    <span className="wheel"></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown