
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" bg-slate-300 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      {/* This line creates a navigation bar with a transparent background, blurred backdrop, sticky positioning at the top, and high z-index for layering */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* This div sets the maximum width of the content and adds responsive horizontal padding */}
        
        <div className="flex items-center justify-between h-16">
          {/* This div creates a flex container for the navbar content, centering items vertically and spacing them horizontally */}
          
          <div className="flex-shrink-0">
            {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
            <img className="h-8 w-8 cursor-pointer " href="./Home" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo" />
          </div>
          {/* This div contains the logo, preventing it from shrinking in the flex container */}
          
          <div className="hidden md:flex items-center justify-center flex-grow">
            {/* This div is hidden on mobile and visible on medium screens and up, containing the main navigation links */}
            
            <div className="flex items-baseline space-x-4">
              {/* This div creates a flex container for the navigation links with even spacing */}
              
              <a href="./Home" className="text-black transition ease-in-out delay-0 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/About" className="text-black transition ease-in-out delay-0 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="./Services" className="text-black transition ease-in-out delay-0 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="./Contact" className="text-black transition ease-in-out delay-0 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              {/* These are the individual navigation links with hover effects */}
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            {/* This div contains social media icons, hidden on mobile and visible on medium screens and up */}
            
            <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            {/* This is the Facebook icon link */}
            
            <a href="#" className="text-gray-500 hover:text-blue-950 px-3 py-2 rounded-md text-sm font-medium">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* This is the Twitter icon link */}
          </div>
          
          <div className="-mr-2 flex md:hidden">
            {/* This div contains the mobile menu button, visible only on small screens */}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
            {/* This button toggles the mobile menu and changes its icon based on the menu state */}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          {/* This div contains the mobile menu, shown only when isOpen is true and on small screens */}
          
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-black hover:text-sky-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-black hover:text-sky-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-black hover:text-sky-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-black hover:text-sky-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          {/* These are the navigation links for the mobile menu */}
          
          <div className="px-2 pt-2 pb-3 flex space-x-4">
            <a href="#" className="text-black hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          {/* These are the social media icons for the mobile menu */}
        </div>
      )}
    </nav>
  )
}

export default Navbar;