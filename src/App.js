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
      <LikertScaleQuestion question={"Pytanie 1"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 2"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 3"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 4"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 5"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 6"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 7"}></LikertScaleQuestion>
      <LikertScaleQuestion question={"Pytanie 8"}></LikertScaleQuestion>
    </div>
  );
}

export default App;
