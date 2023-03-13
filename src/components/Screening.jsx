import { Image, Button, Card, Row, Col, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { formatDateTime } from '../lib/date-time-helper.js' 
import './Screening.css'
import { NODE_HILL } from '../../env.js'

export default function Screening({screening, movie}) {
	const { posterImage, length, categories } = movie.description;
	
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
				      	<code className="me-3">{formatDateTime(screening.time)}</code>
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