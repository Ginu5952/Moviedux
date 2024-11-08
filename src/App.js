import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import { useEffect } from 'react';

function App() {
 
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
        <MoviesGrid></MoviesGrid>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
