import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function Students() {
    const cardInfo = [
        {
            image:"s1.png",
            name: "Mike",
            gpa: 3.8
          },
          {
            image:"s2.png",
              name: "Manal",
              gpa: 3.6
          },
          {
            image:"s3.png",
              name: "Moe",
              gpa: 3.2
          },
          {
            image:"s4.png",
              name: "Mary",
              gpa: 2.6
          }
    ];

    const handler = (event) => {
      alert("Alert: You clicked the button")
    }

  return (
    <div>
      <Container>
        <Row xs={1} md={2}> 
          {cardInfo.map((cardInfo, key))}
          <Col key={key}>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={cardInfo.image}/>
        <Card.Body>
          <Card.Title>{cardInfo.name}</Card.Title>
          <Card.Text>{cardInfo.gpa}</Card.Text>
          <Button variant="primary" onClick={handler}>Grade</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Students;