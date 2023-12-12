import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline.jsx"
//import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
function App() {
  return (
    <Router>
      <Header />
      <div style={{ backgroundColor: "black" }}>
      <Routes>
        <Route key="Home" path="/" element={[<Home />,<Overview/>,<Timeline/>,<Skills/>,<Contact/>]} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;