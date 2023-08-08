import logo from './logo.svg';
import './App.css';
import { Header, Hero, Intro,  }from './container';
import { Navbar, Footer, Slider, Stats, Testim } from './components';
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
      <Stats/>
      <Testim/>
      <Footer />


    </div>
  );
}

export default App;
