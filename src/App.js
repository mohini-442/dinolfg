
import './App.css';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Roadmap from './components/Roadmap';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Loader from './components/Loader';
import Backtotop from './components/Backtotop';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className='bg-[#0A4740] overflow-x-clip'>
        <Loader/>
        <div className='bg-[url(./assets/images/bgheader.webp)] bg-center bg-cover bg-no-repeat min-h-[100vh]'>
          <Header/>
        </div>
        <About />
        <Tokenomics />
        <Utility />
        <Roadmap />
        <Faq />
        <Footer />
        <Backtotop/>
      </div>
    </>
  );
}

export default App;
