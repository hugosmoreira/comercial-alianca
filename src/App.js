import './App.css';
import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Products from './components/Produtcs';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Products />
     
      <About />
      <br />
      <Stats />
      <br />
      <Testimonials />
      <Footer />
      
    </div>
  );
}

export default App;
