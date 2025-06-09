
import './App.css';
import Coremember from './container/corememberpage/Coremember';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/header/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/mission-vision" element="k" />
        <Route path="/aim" element="l" />
        <Route path="/core-members" element={<Coremember/>} />
        <Route path="/projects" element="k" />
        <Route path="/about-us" element="k" />
        {/* Default route (optional) */}
        <Route path="/" element="/" />
      </Routes>
    </Router>
  );
}

export default App;
