import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CompanyCard } from '../Components';
import '../Styles/about.css';

const About = () => {
  return (
    <main id='about'>
      <section className='hero about-section'>
        <h1>About Me</h1>
      </section>
      <section id='industry-experience' className='section section-steel-blue'>
        <Container>
          <h1>Industry Experience</h1>
          <Row>
            <Col
              xs={12}
              lg={4}
              className='d-flex align-items-stretch row-custom'
            >
              <CompanyCard
                companyLogoUrl='https://www.rev.com/Content/img/rev/rev_logo.png'
                jobTitle='Full-Stack Developer'
                position='Software Engineer 1'
                teamName='Enterprise Experience Team'
                jobDescription='Developed full-stack features for Rev’s first enterprise platform, called Workspaces. Workspaces is a file and account management experience exclusive to Enterprise customers.'
                technologies='ASP.NET, React.js, Microsoft Server SQL'
                companyWebsiteUrl='https://www.rev.com/'
                companyWebsiteUrlButtonText='Rev Website'
              />
            </Col>
            <Col
              xs={12}
              lg={4}
              className='d-flex align-items-stretch row-custom'
            >
              <CompanyCard
                companyLogoUrl='https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
                jobTitle='Backend Developer'
                position='Software Engineer Intern'
                teamName='Crowdsource Team'
                jobDescription='Enriched the image labeling experience on the image donation task for Google’s Crowdsource app by enabling customers to quickly and accurately label images using suggested labels.'
                technologies='Java'
                companyWebsiteUrl='https://crowdsource.google.com/'
                companyWebsiteUrlButtonText='Crowdsource Website'
              />
            </Col>
            <Col
              xs={12}
              lg={4}
              className='d-flex align-items-stretch row-custom'
            >
              <CompanyCard
                companyLogoUrl='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vddli8iiri0rwkslfyrj'
                jobTitle='Frontend Developer'
                position='Software Engineer Intern'
                teamName='Software Team'
                jobDescription='Improved data projections that were brought to projects managers to aid them in assigning tasks and forecasting project completion.'
                technologies='Vue.js, Bulma'
                companyWebsiteUrl='https://docs.mindsight.io/'
                companyWebsiteUrlButtonText='Mindsight Docs'
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='section section-raisin-black'></section>
      <section className='section section-atomic-orange'></section>
    </main>
  );
};

export default About;
