import './styles/global.scss'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Watch from './pages/Watch'
import SearchBar from './components/SearchBar'
import SideNavi from './components/SideNavi'
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
   return (
      <div>
         <SearchBar />
         <div className='content'>
            <SideNavi />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/searchresults" element={<SearchResults />} />
               <Route path="/watch" element={<Watch />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
