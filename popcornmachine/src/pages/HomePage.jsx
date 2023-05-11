import React from 'react';
import '../css/HomePage.css';
import { Link } from 'react-router-dom';
import VideoComponent from './components/VideoHome';


const HomePage = () => {
  return (

    <div>
      <div className="homepage">

      <header className='content'>
          <h1>Popcornmachine Sinu reklaamipartner!</h1>
          <p>Tere tulemast! Meie veebileht pakub kiiret ja lihtsat viisi luua atraktiivseid turundusklippe oma ideede põhjal.</p>
        </header>


        <section className='content-2'>
          <h2>Kuidas see toimib?</h2>
          <p>1. Sisesta oma idee klipi kohta meie vormi.</p>
          <p>2. Lae üles oma ettevõtte logo, et lisada isikupära klippidele.</p>
          <p>3. Klipp valmib 24-48 tunni jooksul ja on valmis kasutamiseks!</p>

          <Link to='./packages'><button className='button-1'>Vaata pakette</button></Link>
        </section>
        
        <VideoComponent />

        <section className="testimonial">
          <h2>Kliendi arvustus</h2>
          <blockquote>
            "See veebileht on olnud minu turundusstrateegia jaoks hindamatuks abimeheks. Klippide loomine on lihtne ja kiire ning tulemused on muljetavaldavad. Soovitan seda kõigile, kes otsivad tõhusat turundusvahendit!"
            <cite> - Jane Klient</cite>
          </blockquote>
        </section>
        <footer>
          <p>© 2023 Popcornmachine. Kõik õigused kaitstud.</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
