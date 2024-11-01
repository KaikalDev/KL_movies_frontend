import { FormEvent, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { ContainerSearch, HeaderSearch, IconSearch } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetTermSearch } from '../../Store/reducers/TermsSearch'
import { Rootreducer } from '../../Store'

const Search = () => {
  const { search: searchReducer, year: yearReducer } = useSelector(
    (State: Rootreducer) => State.termsSearch
  )
  const [search, setSearch] = useState(searchReducer)
  const [year, setYear] = useState(yearReducer)
  const [filter, setFilter] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const location = useLocation()

  const SearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/search')
    dispatch(
      SetTermSearch({
        search,
        year: !filter ? '' : year,
        page: 1
      })
    )
  }

  if (location.pathname == '/' || location.pathname == '') {
    return (
      <ContainerSearch>
        <h1>Moovle</h1>
        <form onSubmit={SearchSubmit}>
          <div className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
            />
            <button type="submit">
              <IconSearch />
            </button>
          </div>
          <div className="filter">
            <input
              id="filter"
              checked={filter}
              onClick={() => setFilter(!filter)}
              type="checkbox"
            />
            <label htmlFor="filter">Filtro por Ano: </label>
            <ReactInputMask
              mask="9999"
              disabled={!filter}
              value={!filter ? '' : year}
              onChange={(e) => setYear(e.target.value)}
              type="text"
            />
          </div>
        </form>
      </ContainerSearch>
    )
  } else {
    return (
      <HeaderSearch>
        <div>
          <button onClick={() => navigate('/')}>
            <h1>Moovle</h1>
          </button>
          <form onSubmit={SearchSubmit}>
            <div className="Search">
              <button type="submit">
                <IconSearch />
              </button>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="filter">
          <input
            id="filter"
            checked={filter}
            onClick={() => setFilter(!filter)}
            type="checkbox"
          />
          <label htmlFor="filter">Filtro por Ano: </label>
          <ReactInputMask
            mask="9999"
            disabled={!filter}
            value={!filter ? '' : year}
            onChange={(e) => setYear(e.target.value)}
            type="text"
          />
        </div>
      </HeaderSearch>
    )
  }
}

export default Search
