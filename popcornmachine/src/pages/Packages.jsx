import React from 'react';
import { Link } from 'react-router-dom';


const PackageSelectionPage = () => {
  return (
    <div><h1 className="center">Vali pakett</h1> 
    <div className='packs'>
      <br />
      <div>
      <Link to='../basic'> <img  className= "pack-image" src="/logo.basic.png" alt="Basic Package" /> </Link>
        <p>Lühitutvustus Basic paketi kohta.</p>
        <Link to="../basic">Read more</Link>
      </div>
      <div>
      <Link to='../premium'>  <img className="pack-image" src="/logo.premium.png" alt="Premium Package" /></Link>
        <p>Lühitutvustus Premium paketi kohta.</p>
        <Link to="../premium">Read more</Link>
        
      </div>
    </div>
    </div>
  );
}

export default PackageSelectionPage;
