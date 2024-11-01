import { Route, Routes } from 'react-router-dom'

import Home from '../containers/search'
import SearchPage from './Search'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<SearchPage />} />
  </Routes>
)

export default RoutesPages
