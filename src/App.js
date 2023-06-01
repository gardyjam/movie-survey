// import logo from './logo.svg';
import './App.css';
import MovieSurvey from './MovieSurvey';
import LikertScaleQuestion from './components/LikertScaleQuestion';
import OpenQuestion from './components/OpenQuestion';

function App() {
  return (
    <div className="App">
      <OpenQuestion question={"Jak masz na imie?"}></OpenQuestion>
      <LikertScaleQuestion question={"Czy Zoolander to najlepszy film świata?"}></LikertScaleQuestion>
    </div>
  );
}

export default App;
