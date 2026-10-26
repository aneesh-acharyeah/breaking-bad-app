import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App