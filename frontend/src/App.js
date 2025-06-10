
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/header/Header';
import Coremeberpage from './page/Coremeberpage';
import Homepage from './page/Homepage';
import Footer from './container/footer/Footer';
import Missionvision from './page/Missionvision';

import Projects from './page/Projects';

import Events from './page/Events';
import Achievement from './page/Achievement';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/mission-vision" element={<Missionvision/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/core-members" element={<Coremeberpage/>} />
        <Route path="/projects" element=<Projects/> />
        <Route path="/achievement" element={<Achievement/>} />
        {/* Default route (optional) */}
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
