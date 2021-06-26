import React from 'react';
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplayCards = ({ location, time, pm10, pm25, no2 }) => {
  
  const clearSky = 'images/clean-air.jpeg'
  const graySky = "images/foul-air.jpeg"
  // const graySky = "images/polluted-air.jpg"

  const cardImage = pm25 <= 35 ? clearSky : graySky
  const bg = pm25 <= 35 ? "primary" : "secondary"
  
  return (
    <Col className="container-fluid mt-4">
      <Card bg={bg} border="primary" style={{ width: '18rem' }} key={time.toString()}>
          <Card.Img variant="top" src={cardImage} />
          <Card.Body>
              <Card.Header>{ location } 측정치</Card.Header>
              <Card.Text>
                공기청정도 정보는 매시간마다 갱신됩니다. 
              </Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroupItem> { time } </ListGroupItem>
            <ListGroupItem>pm10: { pm10 } ㎍/m³</ListGroupItem>
            <ListGroupItem>pm2.5: { pm25 } ㎍/m³</ListGroupItem>
            <ListGroupItem>no2: { no2 } ㎍/m³</ListGroupItem>
          </ListGroup>
      </Card>
      </Col>
  )
}

export default DisplayCards;