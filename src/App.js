import Contact from "./compnents/Contact";
import Navbar from "./compnents/Navbar";
import Reviews from "./compnents/Reviews";
import Service from "./compnents/Service";
import Topnav from "./compnents/Topnav";

function App() {
  return (
    <div>
      <Topnav />
      <Navbar />
      <Reviews />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
