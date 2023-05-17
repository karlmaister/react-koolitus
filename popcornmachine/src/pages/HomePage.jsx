import React from 'react';
import { Link } from 'react-router-dom';
import Services from './components/Services';
import Footer from './components/Footer';


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
          <img className= "home-page-image" src="https://www.arsenalproduction.house/img/logo.png" alt="arsenalvideo"></img>
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

    <section className="business-package">
    <div className="right">
          <img  className="home-page-image" src="/image3.jpg" alt="" />
        </div>
        <div className="left">
          <h2>Why Choose Our Business Package:</h2>
    <br />
    <p>- Extensive market research to identify your target audience</p>
    <p>- Customized marketing strategies tailored to your business</p>
    <p>- Professional branding and logo design services</p>
    <p>- High-quality video production to showcase your brand</p>
    <p>- Fast turnaround time of 48 hours for video delivery</p>

    <Link to="../premium"><button className="button-explore">Explore our business solutions</button></Link>
        </div>
       
      </section>

<Footer/>

    </div>
  );
}

export default HomePage;
