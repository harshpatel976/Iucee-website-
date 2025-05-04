import './App.css';
import { useRef } from 'react';
import Aboutpage from './component/aboutpage/Aboutpage';
import Footers from './component/footer/Footers';
import Mainspage from './component/homemainpage/Mainspage';
import Missionpage from './component/mission&vissionpage/Missionpage';
import Projectpage from './component/projectpage/Projectpage';
import Header from './component/header/Headers';

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    mission: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToRef = (key) => {
    sections[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header scrollToRef={scrollToRef} />

      <section ref={sections.home}><Mainspage /></section>
      <section ref={sections.about}><Aboutpage /></section>
      <section ref={sections.mission}><Missionpage /></section>
      <section ref={sections.projects}><Projectpage /></section>
      <section ref={sections.contact}><Footers /></section>
    </div>
  );
}

export default App;
