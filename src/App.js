import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <div className='app-home'>
        <Home />     

      </div>
      <div className='footer'>
        <Footer />

      </div>
    </div>
  );
}

export default App;
