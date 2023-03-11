import { Image, Button, Card, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Screening.css'
// import NODE_HILL from process.env.PUBLIC_URL + '/constants.js'
// import Spider from '../assets/spider.jpeg'

const NODE_HILL = 'https://cinema-rest.nodehill.se'


export default function Screening({screening, movie}) {
	const { posterImage, length, categories } = movie.description
	const screeningTimeRaw = new Date(screening.time)
	const screeningTime = `${screeningTimeRaw.toDateString()} - ${screeningTimeRaw.toLocaleTimeString()}`

	return (
  <Card className="screening">
      <Link to="/booking" state={{screening: screening}}>
      	<Card.Img src={NODE_HILL + posterImage} />
      </Link>
      <Card.Body className="d-flex flex-column row">
	      	<Col>
		        <Card.Title>{movie.title}</Card.Title>
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
		      			<p className="my-0"><span>Duration: {length} min.</span></p>
				      	<code className="me-3">{screeningTime}</code>
				      	{categories.map(c => <Badge bg="secondary" className="me-2" key={c}>{c}</Badge>)}
		      		</Col>
		      		<Col className="col" xs={3} className="align-self-center">
			      		<Link to="/booking" state={{screening: screening}}>
					        <Button bsPrefix="btn-ff" className="float-end" variant="warning">Book</Button>{' '}
			      		</Link>
		      		</Col>
		      	</Row>
      </Card.Body>
    </Card>
  );
}