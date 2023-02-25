import './styles/app.scss'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Watch from './pages/Watch'
import SearchBar from './components/SearchBar'
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
   return (
      <div>
         <SearchBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchresults" element={<SearchResults />} />
            <Route path="/watch" element={<Watch />} />
         </Routes>
      </div>
   )
}
 
export default App
