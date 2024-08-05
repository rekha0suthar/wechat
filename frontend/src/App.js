import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routers from './router/Routers';
function App() {
  return (
    <Router>
      <div className="App">
        <Routers />
      </div>
    </Router>
  );
}

export default App;
