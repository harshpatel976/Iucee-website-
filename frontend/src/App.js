import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './container/header/Header';
import Coremeberpage from './page/Coremeberpage';
import Homepage from './page/Homepage';
import Footer from './container/footer/Footer';
import Missionvision from './page/Missionvision';

import Projects from './page/Projects';

import Events from './page/Events';
import Achievement from './page/Achievement';
import EventsPage from './container/events/EventPage';
import EventDetailPage from './container/events/EventsPage';
import AchievementDetailPage from './container/Achievement/AchievementDetailPage';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/mission-vision" element={<Missionvision/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/core-members" element={<Coremeberpage/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/achievement" element={<Achievement/>} />
        {/* Default route (optional) */}
        <Route path="/" element={<Homepage/>} />
         <Route path="/event" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/achievement/:id" element={<AchievementDetailPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
