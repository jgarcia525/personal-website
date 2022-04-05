import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

interface CompanyCardProps {
  companyLogoUrl: string;
  jobTitle: string;
  teamName: string;
  jobDescription: string;
  technologies: string;
  companyWebsiteUrl: string;
  companyWebsiteUrlButtonText: string;
}

const CompanyCard = (props: CompanyCardProps) => {
  return (
    <Card className='company-card'>
      <div className='company-card-img-container'>
        <Card.Img
          className='company-card-img'
          variant='top'
          src={props.companyLogoUrl}
        />
      </div>
      <div className='company-card-body-container'>
        <Card.Body>
          <Card.Title>{props.jobTitle}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {props.teamName}
          </Card.Subtitle>
          <Card.Text>{props.jobDescription}</Card.Text>
        </Card.Body>
      </div>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item>{props.technologies}</ListGroup.Item>
      </ListGroup>
      <div className='company-card-button-container'>
        <Button variant='atomic-tangerine' href={props.companyWebsiteUrl}>
          {props.companyWebsiteUrlButtonText}
        </Button>
      </div>
    </Card>
  );
};

export default CompanyCard;
