import { Link } from 'react-router-dom'
import { LayoutGrid, Layers, MousePointer2, Zap } from 'lucide-react'

const templateOptions = [
  {
    title: "Restaurant Immersive",
    description: "3D scene of a dining room with interactive menus and door-dash integration.",
    icon: <LayoutGrid className="w-8 h-8 text-blue-400" />
  },
  {
    title: "E-Commerce Galaxy",
    description: "Floating products in a 3D space with smooth scroll animations.",
    icon: <Layers className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Corporate Future",
    description: "Clean, professional, with subtle WebGL background particles.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  }
]

export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Brightsite Template Showcase</h1>
            <p className="text-gray-400 text-lg">Verified starting points for high-performance 3D websites.</p>
          </div>
          <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            &larr; Back to Home
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templateOptions.map((template, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group cursor-pointer"
            >
              <div className="mb-4 bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {template.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{template.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {template.description}
              </p>
              <button className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                Select Template <MousePointer2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Brightsite Agency. All templates include SEO and CI/CD ready config.</p>
        </footer>
      </div>
    </div>
  )
}
