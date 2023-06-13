// import logo from './logo.svg';
import './App.css';
import MovieSurvey from './MovieSurvey';

// Funkcja do pobierania kodu HTML z CodePen
async function getCodePenHTML(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

// Pobierz kod HTML dla widoku Background Noise
getCodePenHTML('https://codepen.io/IbeVanmeenen/full/vZzgvg/')
  .then(html => {
    const backgroundNoiseDiv = document.getElementById('backgroundNoise');
    backgroundNoiseDiv.innerHTML = html;
  })
  .catch(error => console.error(error));

// Pobierz kod HTML dla widoku Old Movie Style
getCodePenHTML('https://codepen.io/MAW/full/rxqqQG/')
  .then(html => {
    const oldMovieStyleDiv = document.getElementById('oldMovieStyle');
    oldMovieStyleDiv.innerHTML = html;
  })
  .catch(error => console.error(error));
  
function App() {
  return (
    <div className="App">
      <MovieSurvey></MovieSurvey>
    </div>
  );
}

export default App;
