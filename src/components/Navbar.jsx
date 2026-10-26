import { Link } from 'react-router-dom'
import { faFire, faUser, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-yellow-400 font-bold text-2xl">BREAKING BAD</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <FontAwesomeIcon icon={faFire} className="mr-2" />
                Home
              </Link>
              <Link
                to="/characters"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Characters
              </Link>
              <Link
                to="/episodes"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <FontAwesomeIcon icon={faTv} className="mr-2" />
                Episodes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar