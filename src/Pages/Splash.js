import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/splash.css';

const Splash = () => {
  return (
    <main>
      <section className='splash-container'>
        <div className='type-writter'>Hello, my name is Jorge.</div>
        <div>
          <Link to='/about'>
            <Button variant='dark' className='learn-more-button'>
              Learn more
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Splash;
