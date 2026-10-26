import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import CharacterCard from '../components/CharacterCard'
import QuoteBox from '../components/QuoteBox'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [charsRes, quotesRes] = await Promise.all([
          axios.get('https://breakingbadapi.com/api/characters?limit=6'),
          axios.get('https://breakingbadapi.com/api/quotes'),
        ])
        setCharacters(charsRes.data)
        setQuotes(quotesRes.data)
        setCurrentQuote(quotesRes.data[Math.floor(Math.random() * quotesRes.data.length)])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setCurrentQuote(randomQuote)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Breaking Bad"
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            BREAKING BAD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Explore the world of Walter White, Jesse Pinkman, and the dangerous drug empire they built.
          </motion.p>
        </div>
      </div>

      {/* Featured Characters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <span className="w-4 h-8 bg-yellow-500 mr-3"></span>
          Featured Characters
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg h-96 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.char_id} character={character} />
            ))}
          </div>
        )}
      </section>

      {/* Random Quote */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <span className="w-4 h-8 bg-yellow-500 mr-3"></span>
          Iconic Quotes
        </h2>
        {currentQuote ? (
          <QuoteBox quote={currentQuote} onNewQuote={handleNewQuote} />
        ) : (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-400">Loading quotes...</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Home