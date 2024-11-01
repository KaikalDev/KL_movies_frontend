import { useSelector } from 'react-redux'
import ResultsPage from '../../containers/Results/inde'
import Search from '../../containers/search'
import { Rootreducer } from '../../Store'
import { useGetMoviesQuery } from '../../services/api'

const SearchPage = () => {
  const { search, page, year } = useSelector(
    (State: Rootreducer) => State.termsSearch
  )
  const { data, isLoading } = useGetMoviesQuery({ search, page, year })

  return (
    <>
      <Search />
      {isLoading ? (
        <p>Loading...</p> // Exibe uma mensagem ou componente de carregamento
      ) : (
        data && (
          <ResultsPage
            current_page={data.current_page}
            results={data.results}
            total_pages={data.total_pages}
          />
        )
      )}
    </>
  )
}

export default SearchPage
