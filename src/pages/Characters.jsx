import { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import { motion } from 'framer-motion'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://breakingbadapi.com/api/characters')
        setCharacters(response.data)
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Characters</h1>
        <p className="text-gray-400">
          Explore all the characters from the Breaking Bad universe
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search characters..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-3 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg h-96 animate-pulse"
            ></div>
          ))}
        </div>
      ) : filteredCharacters.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.char_id} character={character} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold text-white mb-2">No characters found</h3>
          <p className="text-gray-400">Try a different search term</p>
        </div>
      )}
    </div>
  )
}

export default Characters