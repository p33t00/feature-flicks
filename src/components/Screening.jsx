import { Image, Button, Card, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Screening.css'
import Spider from '../assets/spider.jpeg'

export default function Screening() {
	return (
    <Card className="screening">
      <Link to="/booking" >
      	<Card.Img src={Spider} />
      </Link>
      <Card.Body className="d-flex flex-column row">
	      	<Col>
		        <Card.Title>Card Title Card Title Card Title Card Title Card Title Card Title Card Title Card Title</Card.Title>
		        <Card.Text className="description-card">
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		          Some quick example text to build on the card title and make up the
		          bulk of the card's content.
		        </Card.Text>
	      	</Col>
		      	<Row className="card-footer align-self-end">
		      		<Col>
		      			<p className="my-0"><span>Duration: 120 min.</span></p>
				      	<code className="me-3">October 12 Wednesday - 19:50</code>
				      	<Badge bg="secondary">Adventure</Badge>
		      		</Col>
		      		<Col xs={3} className="col align-self-center">
			      		<Link to="/booking">
					        <Button className="float-end" variant="warning">Book</Button>{' '}
			      		</Link>
		      		</Col>
		      	</Row>
      </Card.Body>
    </Card>
  );
}