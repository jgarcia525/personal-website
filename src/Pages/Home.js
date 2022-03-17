import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import parisImage from '../Images/paris.jpg';

const Home = () => {
  return (
    <main>
      <section className='hero'>
        <div className='hero-image-container'>
          <img className='hero-image' src={parisImage} alt='' />
        </div>
      </section>
      <section className='section'>
        <h1>Next section</h1>
      </section>
    </main>
  );
};

export default Home;
