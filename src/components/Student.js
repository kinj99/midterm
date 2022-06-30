import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Grade from './Grade';


function Student({cards}) {

  return (
    <Router>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" alt='Card Image' src={require(`../images/${cards.image}`)}/>
        <Card.Body>
          <Card.Title>{cards.name}</Card.Title>
          <Card.Text>{cards.gpa}</Card.Text>
          <Link to="/Grade">
            <Button variant="primary">Grade</Button>
          </Link>
          <Routes>
          <Route exact path='/Grade' element={Grade}/>
          </Routes>
        </Card.Body>
      </Card>
    </Router>
  )
}

export default Student