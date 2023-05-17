import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import Product from '../pages/components/Product';
import styles from "../css/HomePage.module.css"
import { useState, useEffect } from 'react'
import config from '../database/config.json'
import { Spinner } from 'react-bootstrap';
import { CartSumContext } from './components/CartSumContext';
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';



function HomePage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vormi andmete töötlemine ja edasisaatmine
    console.log('Nimi:', name);
    console.log('E-post:', email);
    console.log('Idee:', idea);
    console.log('Logo:', logo);
    // Võid siin lisada täiendavaid toiminguid, näiteks andmete saatmine serverisse
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { cartSum } = useContext(CartSumContext);

  useEffect(() => {
    fetch(config.productsDB)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  if(isLoading === true) {
    return <Spinner />
  }


  return (
    <div>
      <Form onSubmit={handleSubmit} className="form-forms">
        <Form.Group controlId="name">
          <TextField id="outlined-basic" label="Sisestage oma nimi"variant="outlined" >
          <Form.Control
            type="text"
            placeholder="Sisestage oma nimi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          </TextField>
        </Form.Group>

        <Form.Group controlId="email">
          <TextField id="outlined-basic" label="Sisestage oma e-mail"variant="outlined" >
          <Form.Control
            type="email"
            placeholder="Sisestage oma e-posti aadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </TextField>
        </Form.Group>

        <Form.Group controlId="idea">

          <TextField id="outlined-basic" label="Kirjeldage oma ideed" variant="outlined" >
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Kirjeldage oma ideed"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            required
          />
          </TextField>
        </Form.Group>

        <Form.Group controlId="logo">
        <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  Logo
  <PhotoCamera />
</IconButton>
        </Form.Group>

      <div>Combine your services</div>
      <div>
        <div className={styles.products}>
          {products.map((element) =>
            <Product key={element.id} element={element} />
          )}
        </div>
        <div>Ostukorvi summa: {cartSum} €</div>
        <ToastContainer position='bottom-center'></ToastContainer>
      </div>
    </Form>
    </div>
  )
}
export default HomePage
