import { motion } from 'framer-motion'
import { faSkull, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CharacterCard = ({ character }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={character.img}
          alt={character.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
        <div className="absolute bottom-2 left-2">
          <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded">
            {character.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
        <p className="text-gray-400 text-sm mb-2">"{character.nickname}"</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={character.status === 'Deceased' ? faSkull : faHeart}
              className={`mr-1 ${
                character.status === 'Deceased' ? 'text-gray-400' : 'text-red-500'
              }`}
            />
            <span>{character.status}</span>
          </div>
          <span className="text-yellow-400">
            Seasons: {character.appearance?.join(', ') || 'N/A'}
          </span>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-700">
          <p className="text-gray-300 text-sm line-clamp-2">
            <span className="font-semibold text-yellow-400">Occupation:</span>{' '}
            {character.occupation?.join(', ')}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default CharacterCard