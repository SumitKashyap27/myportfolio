import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Overview from "./components/Overview";
function App() {
  return (  
  <Router>  
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Overview" element={<Overview />}/>
      <Route/>
    </Routes>
  </Router>
);

}
export default App;
