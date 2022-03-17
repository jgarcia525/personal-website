import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <main>
      <section className='hero'>
        <Container>
          <div>Error! Page not found</div>
        </Container>
      </section>
      <section className='section-steel-blue'></section>
    </main>
  );
};

export default ErrorPage;
