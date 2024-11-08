import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(()  => {

    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data));

  }, []);

  const toggleWatchlist = (movieId) => {
      setWatchlist(prev => 
        prev.includes(movieId) 
        ? prev.filter(id => id !== movieId) 
        : [...prev, movieId]
      );
  };
 
  useEffect(() => {
    const container = document.getElementById('bubble-container');
    const numberOfBubbles = 20; 
    
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      
      const size = Math.random() * 50 + 20; 
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}vw`; 
      bubble.style.animationDuration = `${Math.random() * 10 + 5}s`; 

      container.appendChild(bubble); 
    };

   
    for (let i = 0; i < numberOfBubbles; i++) {
      createBubble();
    }

    
    return () => {
      container.innerHTML = ''; 
    };
  }, []);

  return (
    <div className="App">
      <div id="bubble-container"></div>
      <header className="header">
        <Header></Header>


        <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/watchlist">Watchlist</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" 
                element={<MoviesGrid watchlist={watchlist} 
                movies={movies} 
                toggleWatchlist={toggleWatchlist} 
              />
              }
              ></Route>
              <Route 
                path="/watchlist" 
                element={
                  <Watchlist watchlist={watchlist} 
                    movies={movies} 
                    toggleWatchlist={toggleWatchlist} 
                  />
                }
              ></Route>
            </Routes>

        </Router>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
