import { useDispatch } from 'react-redux'
import { ContainerMovie } from './styles'
import { setMovieActive } from '../../Store/reducers/Results'

type Props = {
  Movie: Movie
}

const MovieItem = ({ Movie }: Props) => {
  const dispatch = useDispatch()

  return (
    <ContainerMovie onClick={() => dispatch(setMovieActive(Movie))}>
      <img src={Movie.Poster} alt={`Poster ${Movie.Title}`} />
      <div>
        <span>
          <h3>{Movie.Title}</h3>
          <p>{`${Movie.Year}`}</p>
        </span>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${Movie.imdbID}/`}
          rel="noreferrer"
        >
          Link IMDB
        </a>
      </div>
    </ContainerMovie>
  )
}

export default MovieItem
