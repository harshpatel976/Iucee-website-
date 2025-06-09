
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/header/Header';
import Coremeberpage from './page/Coremeberpage';
import Homepage from './page/Homepage';
import Footer from './container/footer/Footer';
import Missionvision from './page/Missionvision';
import Aim from './page/Aim';
import Projects from './page/Projects';
import Aboutus from './page/Aboutus';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/mission-vision" element={<Missionvision/>} />
        <Route path="/aim" element={<Aim/>} />
        <Route path="/core-members" element={<Coremeberpage/>} />
        <Route path="/projects" element=<Projects/> />
        <Route path="/about-us" element={<Aboutus/>} />
        {/* Default route (optional) */}
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
