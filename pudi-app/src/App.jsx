

import 'bootstrap/dist/css/bootstrap.min.css';
import SectionBg from "./Components/section-bg.jsx"
import Navbar from "./Components/Navbar/navbar.jsx"
import InfoSection from "./Components/InfoSection/infoSection"
import InfoSection2 from "./Components/InfoSection/infoSection2"
import Sustainability from "./Components/Assets/sustainability.png"
import Features from "./Components/features.jsx"
import ContactUs from "./Components/contactus"
import Footer from "./Components/footer.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';
import Script from './All.js';

function App() {
  return (
    <div >
      <Navbar/>
      <SectionBg/>
      <InfoSection 
      src={Sustainability} 
      alt="An image"
      content=""
      />
      <InfoSection2/>
      <Features/>
      <ContactUs/>
      <FontAwesomeIcon icon="fa-brands fa-youtube" />
      <Footer/>
      <script src={Script}></script>
    </div>
  );
}

export default App;
