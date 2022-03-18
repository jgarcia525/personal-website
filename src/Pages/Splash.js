import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import '../Styles/splash.css';

const Splash = () => {
  return (
    <main>
      <section className='splash-container'>
        <div className='type-writer-container'>
          <Typewriter
            options={{
              strings: [
                'Hello, my name is Jorge.',
                'I am a full-stack developer.',
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: 'type-writer',
              cursorClassName: 'type-writer',
            }}
          />
        </div>
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
