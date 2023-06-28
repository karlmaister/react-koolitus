import React from 'react'
import Services from './components/Services';

function AboutUs() {
  return (
    <div>
      <div><Services/></div>
       <section className="how-it-works-section">

<div className="left">
  <h2>How It Works</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  <br />
  <p>1. Select your package</p> <br />
  <p>2. Send your wish with your brand logo</p>  <br />
  <p>3. Receive your video in 48h</p>
</div>
<div className="right">
  <iframe
    width="560"
    height="315"
    src="https://player.vimeo.com/video/121097470?h=e3506ba6f1"
    title="How It Works Video"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>
</section>
    </div>
  )
}

export default AboutUs
