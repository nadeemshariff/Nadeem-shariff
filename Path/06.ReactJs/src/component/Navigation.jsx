// React import removed as it's not used in this component

// import Props from "./Props"

const Navigation = () => {
  return (
    
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-8 w-8 mr-4" src="/logo.svg" alt="Logo" />
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">Home</a>
                  <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">About</a>
                  <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">Services</a>
                  <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">Contact</a>
                </div>
              </div>
              <div>
                <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">Sign In</button>
              </div>
            </div>
          </div>
        </nav>
  )
}

export default Navigation