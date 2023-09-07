import logo from './logo.svg';
import './App.css';
import Nav from './components/nav.jsx'
import Video from './components/video.jsx'
import Character from './components/character.jsx'
import Abilities from './components/abilities.jsx'
import Special from './components/special.jsx'
import Footer from './components/footer.jsx'
function App() {
  return (
  <>
    <Nav/>
    <main>
        <Video/>
        <Character/>
        <Abilities/>
        <Special/>
    </main>
    <Footer/>
  </>
  );
}

export default App;
