import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import MilestoneCatalog from './components/MilestoneCatalog'
import MilestoneDetail from './components/MilestoneDetail'
import Wishlist from './components/Wishlist'
import Communication from './components/Communication'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/milestones" element={<MilestoneCatalog />} />
          <Route path="/milestones/:id" element={<MilestoneDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App