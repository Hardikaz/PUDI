

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import Content from './contents.jsx'
import SectionBg from "./Components/section-bg.jsx"
import Navbar from "./Components/Navbar/navbar.jsx"
import InfoSection from "./Components/InfoSection/infoSection"
import InfoSection2 from "./Components/InfoSection/infoSection2"
import Sustainability from "./Components/Assets/sustainability.png"
import Features from "./Components/features.jsx"
import ContactUs from "./Components/contactus"
import Footer from "./Components/footer.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OurTeam from "./Components/ourTeam.jsx"
import './App.css';
import Script from './All.js';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/our-team' element={<OurTeam/>}/>
        <Route path='/' element={<Content />}> </Route>
      </Routes>
      {/* <SectionBg/>
      <InfoSection 
      src={Sustainability} 
      alt="An image"
      content=""
      />
      <InfoSection2/>
      <Features/>
      <ContactUs/>
      <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
      <Footer/>
      <script src={Script}></script>
    </div>
  );
}

export default App;
