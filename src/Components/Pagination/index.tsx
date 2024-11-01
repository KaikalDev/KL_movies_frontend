import { useDispatch } from 'react-redux'
import { PaginationContainer } from './styles'
import { chosenPage } from '../../Store/reducers/TermsSearch'

type Props = {
  current_page: number
  total_pages: number
}

const Pagination = ({ current_page, total_pages }: Props) => {
  const pages: number[] = []
  const dispatch = useDispatch()

  const firstPage = () => {
    if (current_page <= 5) {
      return 1
    }

    return Math.max(current_page - 5, 1)
  }

  const lastPage = () => {
    return Math.min(firstPage() + 10, total_pages)
  }

  for (let i = firstPage(); i <= lastPage(); i++) {
    pages.push(i)
  }

  return (
    <PaginationContainer>
      <div>
        <button
          onClick={() =>
            current_page > 1 && dispatch(chosenPage(current_page - 1))
          }
          disabled={current_page <= 1}
        >
          <p>{'<'}</p>
        </button>
        <ul>
          {pages.map((p) => (
            <li key={p}>
              <button
                onClick={() => dispatch(chosenPage(p))}
                disabled={p === current_page}
              >
                <p>{p}</p>
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            current_page < total_pages && dispatch(chosenPage(current_page + 1))
          }
          disabled={current_page >= total_pages}
        >
          <p>{'>'}</p>
        </button>
      </div>
      <p>
        Página {current_page} de {total_pages}
      </p>
    </PaginationContainer>
  )
}

export default Pagination
