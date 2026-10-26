import { motion } from 'framer-motion'
import { faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EpisodeList = ({ episodes }) => {
  return (
    <div className="grid gap-6">
      {episodes.map((episode) => (
        <motion.div
          key={episode.episode_id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
        >
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white">
                S{episode.season}E{episode.episode}: {episode.title}
              </h3>
              <div className="flex items-center bg-yellow-500 text-gray-900 px-2 py-1 rounded text-sm font-bold">
                <FontAwesomeIcon icon={faStar} className="mr-1" />
                {episode.rating}
              </div>
            </div>
            <div className="flex items-center text-gray-400 text-sm mb-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              <span>{episode.air_date}</span>
            </div>
            <p className="text-gray-300">{episode.synopsis || 'No synopsis available.'}</p>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-yellow-400">Characters:</span>{' '}
                {episode.characters?.join(', ') || 'N/A'}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default EpisodeList