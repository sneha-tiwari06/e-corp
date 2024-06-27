import React from 'react'

function HeroVdo() {
  return (
    <div>
        <div id="banner" className="carousel carousel-fade slide banner" data-ride="carousel" data-delay="5000">
                <video autoPlay muted loop playsInline webkitplaysinline="true" poster="https://ecis.in/ecorp-react/images/bg-darkgray.jpg" className="homeVideo" id="homeVideo">
                    <source src="https://ecis.in/ecorp-react/banner.mp4" type="video/mp4" />
                   
                </video>
                <div className="scrollDown">
                    <span className="circle"></span>
                    <i className="fa fa-chevron-down"></i>
                </div>
            </div>
    </div>
  )
}

export default HeroVdo
