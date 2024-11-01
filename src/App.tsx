import { Provider } from 'react-redux'
import { GlobalStyles } from './styles'
import { Store } from './Store'
import { BrowserRouter } from 'react-router-dom'
import RoutesPages from './Pages/routes'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesPages />
      </BrowserRouter>
    </Provider>
  )
}

export default App
