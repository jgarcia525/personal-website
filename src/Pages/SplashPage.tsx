import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FadeInOut, NavigationBar } from '../Components';
import Typewriter from 'typewriter-effect';
import '../Styles/splashpage.css';

const SplashPage = () => {
  // General Typewritter settings
  const typeDelaySpeed: number = 25;
  const deleteCharSpeed: number = 10;
  const deleteAllSpeed: number = 7;
  const initialPauseTime: number = 1000;
  const pauseTime: number = 2000;

  const greeting: string = 'Hello, my name is Jorge.';
  const bio: string[] = [
    'I am ',
    'a full-stack developer.',
    'an online fitness coach.',
    'a climber, weightlifter, ',
    'and adventurer.',
  ];

  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <main>
      <section className='splash-container'>
        {showGreeting && (
          <div className='type-writer-container'>
            <FadeInOut show={showGreeting} duration={50}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(initialPauseTime)
                    .typeString(greeting)
                    .pauseFor(pauseTime)
                    .typeString('<br />' + bio[0])
                    .typeString(bio[1])
                    .pauseFor(pauseTime)
                    .deleteChars(bio[1].length)
                    .typeString(bio[2])
                    .pauseFor(pauseTime)
                    .deleteChars(bio[2].length)
                    .typeString(bio[3])
                    .typeString('<br />' + bio[4])
                    .pauseFor(pauseTime)
                    .deleteAll(deleteAllSpeed)
                    .start()
                    .callFunction(() => {
                      setShowGreeting(false);
                    });
                }}
                options={{
                  delay: typeDelaySpeed,
                  deleteSpeed: deleteCharSpeed,
                }}
              />
            </FadeInOut>
          </div>
        )}
        <FadeInOut show={!showGreeting} duration={1000}>
          <Link to='/about'>
            <Button variant='steel-blue' size='lg'>
              Learn more
            </Button>
          </Link>
        </FadeInOut>
      </section>
    </main>
  );
};

export default SplashPage;
