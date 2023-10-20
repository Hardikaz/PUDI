
import './App.css';
import './All.js';
import SectionBg from "./Components/section-bg.jsx"
import Navbar from "./Components/Navbar/navbar.jsx"
import InfoSection from "./Components/InfoSection/infoSection"
import InfoSection2 from "./Components/InfoSection/infoSection2"
import Sustainability from "./Components/Assets/sustainability.png"
import Features from "./Components/features.jsx"



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

    </div>
  );
}

export default App;
