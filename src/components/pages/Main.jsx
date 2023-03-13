import { Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Screening from '../Screening.jsx'
import { getScreenings, getMovies, getMoviesToCat } from '../../services/MoviesApi.js'


// TODO: enable Screenings and movies from api

export default function Main({catId, sortOrder}) {
  const [categoryId, setCategoryId] = useState(catId)
  const [sortOrd, setSortOrd] = useState(sortOrder)
	const [shownScreenings, setShownScreenings] = useState([])
  const [screenings, setScreenings] = useState([])
	const [movies, setMovies] = useState({});
  const [moviesXcat, setMoviesXcat] = useState([])

	useEffect(() => {
    if (!moviesXcat.length) (async () => setMoviesXcat(await getMoviesToCat()))();

		if (!screenings.length) {
      getScreenings().then(data => {
        setScreenings(data)
        setShownScreenings(data)
      }, e => console.error(e))
    } 

		if (!Object.keys(movies).length) {(async () => setMovies(await getMovies()))()};
	}, [])


  if (catId !== categoryId) {
    setCategoryId(catId);
    if (catId === 0) setShownScreenings(screenings);
    else setShownScreenings(sortByTime(filterByCategory(screenings, moviesXcat[catId]), sortOrd));
  }

  if (sortOrd !== sortOrder) {
    setSortOrd(sortOrder)
    setShownScreenings(sortByTime(shownScreenings, sortOrder))
  }

	return (
    <Stack gap={4}>
      {
        (shownScreenings.length && Object.keys(movies).length) ?
        shownScreenings.map(s => <Screening key={s.id} screening={s} movie={movies[s.movieId]} />) :
        <Spinner animation="border" variant="warning" />
      }
    </Stack>
  ) 
}

function sortByTime(screenings, order) {
  return screenings.sort((a,b) => {
    const aTime = new Date(a.time).getTime()
    const bTime = new Date(b.time).getTime()
    return order == 0 ? aTime - bTime : bTime - aTime;
  })
}

function filterByCategory(screenings, movXcat) {
  if (movXcat === undefined) return screenings;
  return screenings.filter(s => {return movXcat.indexOf(s.movieId) > -1})
}

// function getScreenings() {
//   return [
//     {
//       "id": 1,
//       "time": "2023-05-01T16:00:00.000Z",
//       "movieId": 1,
//       "auditoriumId": 1
//     },
//     {
//       "id": 2,
//       "time": "2023-05-01T19:00:00.000Z",
//       "movieId": 2,
//       "auditoriumId": 1
//     },
//     {
//       "id": 3,
//       "time": "2023-05-01T16:00:00.000Z",
//       "movieId": 3,
//       "auditoriumId": 2
//     },
//     {
//       "id": 4,
//       "time": "2023-05-01T19:00:00.000Z",
//       "movieId": 4,
//       "auditoriumId": 2
//     },
//     {
//       "id": 5,
//       "time": "2023-05-02T16:00:00.000Z",
//       "movieId": 5,
//       "auditoriumId": 1
//     },
//     {
//       "id": 6,
//       "time": "2023-05-02T19:00:00.000Z",
//       "movieId": 6,
//       "auditoriumId": 1
//     }
//   ];
// }


// function getMovies() {
// 	return {
//   "1": {
//     "id": 1,
//     "title": "Crocodile Dundee",
//     "description": {
//       "length": 89,
//       "categories": [
//         "Adventure",
//         "Comedy"
//       ],
//       "posterImage": "/images/posters/tt0090555.jpg"
//     }
//   },
//   "2": {
//     "id": 2,
//     "title": "Creepshow 2",
//     "description": {
//       "length": 110,
//       "categories": [
//         "Comedy",
//         "Fantasy",
//         "Horror"
//       ],
//       "posterImage": "/images/posters/tt0092796.jpg"
//     }
//   },
//   "3": {
//     "id": 3,
//     "title": "Avalon",
//     "description": {
//       "length": 93,
//       "categories": [
//         "Drama"
//       ],
//       "posterImage": "/images/posters/tt0099073.jpg"
//     }
//   },
//   "4": {
//     "id": 4,
//     "title": "The Sandlot",
//     "description": {
//       "length": 114,
//       "categories": [
//         "Comedy",
//         "Drama",
//         "Family"
//       ],
//       "posterImage": "/images/posters/tt0108037.jpg"
//     }
//   },
//   "5": {
//     "id": 5,
//     "title": "Bananas in my business",
//     "description": {
//       "length": 84,
//       "categories": [
//         "Documentary",
//         "Biography",
//         "Music"
//       ],
//       "posterImage": "/images/posters/tt0109381.jpg"
//     }
//   },
//   "6": {
//     "id": 6,
//     "title": "The Flintstones",
//     "description": {
//       "length": 105,
//       "categories": [
//         "Comedy",
//         "Family",
//         "Fantasy"
//       ],
//       "posterImage": "/images/posters/tt0109813.jpg"
//     }
//   },
//   "7": {
//     "id": 7,
//     "title": "A Family Thing",
//     "description": {
//       "length": 75,
//       "categories": [
//         "Comedy",
//         "Drama"
//       ],
//       "posterImage": "/images/posters/tt0116275.jpg"
//     }
//   }
// }
// }