type Props = {
  Movie: Movie
}

const MovieItem = ({ Movie }: Props) => (
  <li>
    <img src={Movie.Poster} alt={`Poster ${Movie.Title}`} />
    <div>
      <h3>{Movie.Title}</h3>
      <p>{`${Movie.Type} . ${Movie.Year}`}</p>
      <a href={`https://www.imdb.com/title/${Movie.imdbID}/`}>ImdbID</a>
    </div>
  </li>
)

export default MovieItem
