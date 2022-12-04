import logo from './logo.svg';
import './App.css';
import Intro from './Component/Intro';
import ReactGame from './Component/ReactGame';
import NavigationBar from './Component/NavigationBar';
import TrendingGame from './Component/TrendingGame';
import Contact from './Component/Contact';
// import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar title="Game Keren"/>
      <Intro/>
      </div>

      <div className="best">
      <ReactGame/>
      </div>

      <div className="trending">
      <TrendingGame/>
      </div>

      <div className="contact">
        <Contact/>
      </div>

      {/* <div className="footer">
        <Footer/>
      </div> */}
    </div>

    
  );
} 

export default App;
