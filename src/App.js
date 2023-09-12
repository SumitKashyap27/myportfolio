import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
//import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
function App() {
  return (
    <Router>
      <Header />
      <div style={{ backgroundColor: "black" }}>
      <Routes>
        <Route key="Home" path="/" element={[<Home />,<Overview/>,<Skills/>,<Contact/>]} />
        {/* <Route key="Overview" path="/Overview" element={<Overview />} /> */}
        {/* <Route key="Qualification" path="/Qualification" element={<Qualification />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;