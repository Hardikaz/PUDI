
import './App.css';
import './All.js';
import SectionBg from "./Components/section-bg.jsx"
import Navbar from "./Components/Navbar/navbar.jsx"
import InfoSection from "./Components/InfoSection/infoSection"
import InfoSection2 from "./Components/InfoSection/infoSection2"
import Sustainability from "./Components/Assets/sustainability.png";
function App() {
  return (
    <div >
      <Navbar/>
      <SectionBg/>
      <InfoSection 
      src={Sustainability} 
      alt="An image"
      content="The Environmental Protection Agency (EPA) estimates that product packaging makes up 29.9% of the material in municipal solid waste landfills, or 80.1 million tons of trash. Companies today need to be more conscious of the environmental impact of their packaging. The future lies in sustainable packaging that consumes fewer resources, generates less trash, and promotes recycling."
      />
      

      <InfoSection2/>
    </div>
  );
}

export default App;
