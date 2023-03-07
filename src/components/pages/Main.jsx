import { Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Screening from '../Screening.jsx'
// import { getScreenings, getMovies } from '../../services/MoviesApi.js'


export default function Main() {
	const [screenings, setScreenings] = useState([])
	const [movies, setMovies] = useState([]);

	// called only once, on the start if 2nd arg is []
	useEffect(() => { 
		// (async () => setScreenings(await getScreenings()))()
		// (async () => setMovies(await getMovies()))()
		setScreenings(getScreenings())
		setMovies(getMovies())
	}, [])

	return (
		<>
			{
				screenings.length > 0 ? (
					<Stack gap={4}>
			      {screenings.map(s => <Screening key={s.id} screening={s} movie={movies[s.movieId]} />)}
			    </Stack>
				) : (<p>No screenings</p>)
			}
		</>
	)
}



function getScreenings() {
  return [
    {
      "id": 1,
      "time": "2023-05-01T16:00:00.000Z",
      "movieId": 1,
      "auditoriumId": 1
    },
    {
      "id": 2,
      "time": "2023-05-01T19:00:00.000Z",
      "movieId": 2,
      "auditoriumId": 1
    },
    {
      "id": 3,
      "time": "2023-05-01T16:00:00.000Z",
      "movieId": 3,
      "auditoriumId": 2
    },
    {
      "id": 4,
      "time": "2023-05-01T19:00:00.000Z",
      "movieId": 4,
      "auditoriumId": 2
    },
    {
      "id": 5,
      "time": "2023-05-02T16:00:00.000Z",
      "movieId": 5,
      "auditoriumId": 1
    },
    {
      "id": 6,
      "time": "2023-05-02T19:00:00.000Z",
      "movieId": 6,
      "auditoriumId": 1
    }
  ];
}


function getMovies() {
	return {
  "1": {
    "id": 1,
    "title": "Crocodile Dundee",
    "description": {
      "length": 89,
      "categories": [
        "Adventure",
        "Comedy"
      ],
      "posterImage": "/images/posters/tt0090555.jpg"
    }
  },
  "2": {
    "id": 2,
    "title": "Creepshow 2",
    "description": {
      "length": 110,
      "categories": [
        "Comedy",
        "Fantasy",
        "Horror"
      ],
      "posterImage": "/images/posters/tt0092796.jpg"
    }
  },
  "3": {
    "id": 3,
    "title": "Avalon",
    "description": {
      "length": 93,
      "categories": [
        "Drama"
      ],
      "posterImage": "/images/posters/tt0099073.jpg"
    }
  },
  "4": {
    "id": 4,
    "title": "The Sandlot",
    "description": {
      "length": 114,
      "categories": [
        "Comedy",
        "Drama",
        "Family"
      ],
      "posterImage": "/images/posters/tt0108037.jpg"
    }
  },
  "5": {
    "id": 5,
    "title": "Bananas in my business",
    "description": {
      "length": 84,
      "categories": [
        "Documentary",
        "Biography",
        "Music"
      ],
      "posterImage": "/images/posters/tt0109381.jpg"
    }
  },
  "6": {
    "id": 6,
    "title": "The Flintstones",
    "description": {
      "length": 105,
      "categories": [
        "Comedy",
        "Family",
        "Fantasy"
      ],
      "posterImage": "/images/posters/tt0109813.jpg"
    }
  },
  "7": {
    "id": 7,
    "title": "A Family Thing",
    "description": {
      "length": 75,
      "categories": [
        "Comedy",
        "Drama"
      ],
      "posterImage": "/images/posters/tt0116275.jpg"
    }
  }
}
}