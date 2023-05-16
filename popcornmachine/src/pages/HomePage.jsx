import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import { Link } from 'react-router-dom';
import Services from './components/Services';

const HomePage = () => {


  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });


  }
  return (
    <div>


      {/* Section 1: Background Picture with Input Box */}
      <section className="app-background">
        <div className="overlay"></div>
        <div className="content">
          <h1>Arsenal Video your digital media partner</h1>
        </div>
        <section className="carousel-section">
          <h2>Choose Your Service package</h2>
          <div className="carousel">
            <Link to='../basic'><img src="/logo.basic.png" alt="Private" /></Link>
            <Link to='../premium'><img src="/logo.premium.png" alt="Business" /></Link>
          </div>
        </section>
        <button className="scroll-button" onClick={handleScroll}>
          <div className="center-con">
            <div className="round"> MORE
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </button>
      </section>

      <section className="carousel-section">
        <h1>Your Partner in Digital Media</h1>
        <p>
          Welcome to VideoArsenal, your one-stop destination for creating outstanding animated ads. Whether you're a private customer or a business, we have tailored solutions to meet your specific needs.
        </p>


        <Services />

      </section>

      {/* Section 2: How It Works with Video */}
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

      <div className="account-selection">
        <h2>Choose Your Account Type</h2>
        <div>
          <Link to='../basic'><button className="button-1">Private Account</button></Link>
          <Link to='../premium'><button className="button-1">Business Account</button></Link>

        </div>
      </div>

      {/* Section 3: Carousel */}

    </div>
  );
}

export default HomePage;
