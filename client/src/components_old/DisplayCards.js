import React from 'react';
import { Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../images/clear-air.jpg';


const DisplayCards = ( { location, time, pm10, pm25, no2 } ) => {
  const cardImage = pm25 < 35 ? "https://image.freepik.com/free-photo/clear-air-fly-fantastic-travel_1232-3824.jpg"  : "https://scx1.b-cdn.net/csz/news/800/2018/morethan40am.jpg"
  return (
         <Col className="container-fluid mt-4">
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={cardImage} />
            <Card.Body>
                    <Card.Title>{ location } 공기청정 측정치</Card.Title>
              <Card.Text>
                공공데이터 포털에서 불러온 {location}의 현재시각 {time}의 공기청정도 입니다. 공기청정도 정보는 매시간마다 갱신됩니다. 
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
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