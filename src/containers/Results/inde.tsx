import MovieItem from '../../Components/Movie'
import Pagination from '../../Components/Pagination'
import SideBar from '../../Components/SideBar'
import { SectionResults } from './styles'

const ResultsPage = ({ current_page, results, total_pages }: reponseApi) => {
  return (
    <>
      <SectionResults>
        <div>
          <p>
            Pagina {current_page} de {total_pages}
          </p>
          <ul>
            {results.map((Movie) => (
              <MovieItem Movie={Movie} key={Movie.imdbID} />
            ))}
          </ul>
        </div>
        <div className="SideBar">
          <SideBar />
        </div>
      </SectionResults>
      <Pagination current_page={current_page} total_pages={total_pages} />
    </>
  )
}

export default ResultsPage
