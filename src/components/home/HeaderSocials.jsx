import React from 'react'

function HeaderSocials() {
  return (
    <div className="home_socials">
        <a href="instagram.com/" className="home_socials-links" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="twitter.com/" className="home_socials-links" target="_blank">
            <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="github.com/" className="home_socials-links" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="mailto:bethelfiagbetor15@gmail.com" rel="noreferrer" className="home_socials-links" target="_blank">
        <i class="fa-regular fa-envelope"></i>
        </a>
    </div>
  )
}

export default HeaderSocials