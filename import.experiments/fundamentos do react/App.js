import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpessions';
import CompTest from './components/CompTest';
import Events from './components/Event';
import Challenge from './components/Challenge';


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <CompTest />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
