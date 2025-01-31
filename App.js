import logo from './logo.svg';
// import './App.css';
import Demo from './components/Demo';
import Navigationbar from './components/navigationbar';
import Pages from './components/Pages';

function App() {
  return (
    <>
        <div className="container">
        <Navigationbar title="HEROS NEVER DIE" font= "Fonts/oswald.ttf"></Navigationbar>
        <Demo></Demo>
        <Pages></Pages>
        </div>

      
    </>
  );
}

export default App;
