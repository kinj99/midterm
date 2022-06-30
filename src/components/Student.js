import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Student({cards}) {
  return (
    <Router>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={require(`../images/${cards.image}`)}/>
        <Card.Body>
          <Card.Title>{cards.name}</Card.Title>
          <Card.Text>{cards.gpa}</Card.Text>
          <Button variant="primary">Grade</Button>
        </Card.Body>
      </Card>
    </Router>
  )
}

export default Student