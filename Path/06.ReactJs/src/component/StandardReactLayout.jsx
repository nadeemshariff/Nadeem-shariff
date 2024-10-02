import React from 'react'

const StandardReactLayout = () => {
  return (
    
        <div className="standard-layout">
          <header className="header">
            <h1>My React App</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main className="main-content">
            {/* Content will be rendered here */}
          </main>
          <footer className="footer">
            <p>© 2023 My React App. All rights reserved.</p>
          </footer>
        </div>
        
    
  )
}

export default StandardReactLayout