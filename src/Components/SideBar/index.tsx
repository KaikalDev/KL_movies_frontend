import { useSelector } from 'react-redux'
import { Rootreducer } from '../../Store'
import { AsideContainer } from './styles'

const SideBar = () => {
  const { active: Movie } = useSelector((State: Rootreducer) => State.results)

  if (Movie) {
    return (
      <AsideContainer>
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
      </AsideContainer>
    )
  }
  return <div className="aside" />
}

export default SideBar
