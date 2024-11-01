import MovieItem from '../../Components/Movie'

const ResultsPage = ({ current_page, results, total_pages }: reponseApi) => {
  return (
    <>
      <section>
        <aside></aside>
        <div>
          <ul>
            {results.map((Movie) => (
              <MovieItem Movie={Movie} key={Movie.imdbID} />
            ))}
          </ul>
        </div>
      </section>
      <footer></footer>
    </>
  )
}

export default ResultsPage
