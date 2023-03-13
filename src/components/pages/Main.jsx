import { Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Screening from '../Screening.jsx'
import { getScreenings, getMovies, getMoviesToCat } from '../../services/MoviesApi.js'

export default function Main({catId, sortOrder}) {
  const [categoryId, setCategoryId] = useState(catId)
  const [sortOrd, setSortOrd] = useState(sortOrder)
	const [shownScreenings, setShownScreenings] = useState([])
  const [screenings, setScreenings] = useState([])
	const [movies, setMovies] = useState({});
  const [moviesXcat, setMoviesXcat] = useState([])

	useEffect(() => {
    (async () => setMoviesXcat(await getMoviesToCat()))();

    getScreenings().then(data => {
      setScreenings(data)
      setShownScreenings(data)
    }, e => console.error(e));

    (async () => setMovies(await getMovies()))();
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
    <Stack gap={5}>
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