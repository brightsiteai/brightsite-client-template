import { Routes, Route, Link } from 'react-router-dom'
import Templates from './pages/Templates'

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Brightsite Client Template
      </h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl text-center">
        The starting point for all Brightsite client projects. Verified build with React 19, Tailwind v3, and Three.js ready.
      </p>
      <div className="flex gap-4">
        <Link 
          to="/templates" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
        >
          View Templates
        </Link>
        <a 
          href="https://brightsiteagency.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
        >
          Agency Site
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<Templates />} />
    </Routes>
  )
}

export default App
