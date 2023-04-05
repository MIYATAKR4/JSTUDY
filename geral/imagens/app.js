import './App.css';
import study from './assets/study.jpg'

function App() {
  return (
    <div className="App">
     <h1>avançando no react</h1>
      {/* imagem em public */}
      <div>
      <img src="/space.jpg" alt="espaço" />
      </div>
      {/* imagem em asset */}
      <div>
      <img src={study} alt="estudando" />
      </div>
    </div>
  );
}

export default App;
