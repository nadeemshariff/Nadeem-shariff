import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>
        <p className="text-xl text-gray-700 text-center mb-12">Welcome to our website! We are a passionate team dedicated to creating amazing experiences.</p>
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">Our mission is to provide high-quality products and services that exceed our customers' expectations.</p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <span className="w-32 font-medium">John Doe</span>
              <span className="text-gray-500">CEO</span>
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-32 font-medium">Jane Smith</span>
              <span className="text-gray-500">CTO</span>
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-32 font-medium">Mike Johnson</span>
              <span className="text-gray-500">Lead Developer</span>
            </li>
            <li className="flex items-center text-gray-600">
              <span className="w-32 font-medium">Sarah Brown</span>
              <span className="text-gray-500">Designer</span>
            </li>
          </ul>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <div className="space-y-2 text-gray-600">
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Email: info@example.com
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Phone: (123) 456-7890
            </p>
            <p className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Address: 123 Main St, Anytown, USA 12345
            </p>
          </div>
        </section>
      </div>
    </div>

  )
}

export default About