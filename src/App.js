import logo from './logo.svg';
import './App.css';
import { Header, Hero,  }from './container';
import { Navbar, Footer, Slider } from './components';
import Banner from './components/banner/Banner';
import Services from './container/services/Services';
import Features from './container/features/Features';


function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Banner/>
      <Hero />
      <Services/>
      <Features/>
      <Footer />

    </div>
  );
}

export default App;
