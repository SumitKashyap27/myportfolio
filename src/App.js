import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline.jsx"
//import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import ReactAnimatedCursor from 'react-animated-cursor';
function App() {
  return (
    <Router>
      <ReactAnimatedCursor
        innerSize={8}
        outerSize={15}
        color='255, 255, 255'
        outerStyle={{
          border: '2px solid var(--cursor-color)',
          borderRadius: '50%',
          boxShadow: '0 0 15px 2px', // White glow effect
        }}
      />
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