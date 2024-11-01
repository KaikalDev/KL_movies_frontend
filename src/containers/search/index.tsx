import { FormEvent, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { ContainerSearch, HeaderSearch, IconSearch } from './styles'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SetTermSearch } from '../../Store/reducers/TermsSearch'

const Search = () => {
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('')
  const [filter, setFilter] = useState(false)
  const dispatch = useDispatch()

  const location = useLocation()

  const SearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      SetTermSearch({
        search,
        year,
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
        <h1>Moovle</h1>
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
      </HeaderSearch>
    )
  }
}

export default Search
