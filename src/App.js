import React from 'react';
import './App.css'; // Importing the CSS file for styling

function App() {
  return (
    <div className="App"> {/* The main container div */}
      <header>
        <h1>Welcome to My Homepage</h1> {/* Header with a title */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li> {/* Navigation links */}
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Sections for different content */}
        <section>
          <h2>About Me</h2>
          <p>This is a brief description of myself and my interests.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Contact information goes here.</p>
        </section>
      </main>

      <footer>
        <p>© 2024 MyHomepage. All rights reserved.</p> {/* Footer */}
      </footer>
    </div>
  );
}

export default App; // Exporting the App component for usage in other parts of the app
