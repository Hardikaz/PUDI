
import './App.css';
import './All.js';
import SectionBg from "./Components/section-bg.jsx"
import Navbar from "./Components/Navbar/navbar.jsx"
import InfoSection from "./Components/InfoSection/infoSection"
function App() {
  return (
    <div >
      <Navbar/>
      <SectionBg/>
      <InfoSection/>
    </div>
  );
}

export default App;
