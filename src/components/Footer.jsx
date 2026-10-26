const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Breaking Bad Fan App. Not affiliated with AMC.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer