import Container from 'react-bootstrap/Container'
import './AuditoriumBig.css'

export default function AuditoriumBig() {
	return (
		<Container className="auditorium-big">
			<div className="row-seat row-A">
				<span>A</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</div>
			</div>
			<div className="row-seat row-B">
				<span>B</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
				</div>
			</div>
			<div className="row-seat row-C">
				<span>C</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
				</div>
			</div>
			<div className="row-seat row-D">
				<span>D</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
			<div className="row-seat row-E">
				<span>E</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
			<div className="row-seat row-F">
				<span>F</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
			<div className="row-seat row-G">
				<span>G</span>
				<div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div className="booked-seat">6</div>
					<div className="booked-seat">7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
				</div>
			</div>
		</Container>
	);
}