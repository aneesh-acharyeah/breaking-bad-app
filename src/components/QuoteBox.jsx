import { motion } from 'framer-motion'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuoteBox = ({ quote, onNewQuote }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6 border border-yellow-500 shadow-lg relative"
    >
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-yellow-500 text-3xl absolute top-4 left-4 opacity-20"
      />
      <FontAwesomeIcon
        icon={faQuoteRight}
        className="text-yellow-500 text-3xl absolute bottom-4 right-4 opacity-20"
      />
      <div className="text-center">
        <p className="text-xl italic text-gray-200 mb-4">"{quote.quote}"</p>
        <p className="text-yellow-400 font-bold">— {quote.author}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={onNewQuote}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Another Quote
        </button>
      </div>
    </motion.div>
  )
}

export default QuoteBox