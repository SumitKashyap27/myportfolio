import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Overview from "./components/Overview";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ backgroundColor: "black" }}>
      <Routes>
        <Route key="Home" path="/" element={[<Home />,<Overview/>]} />
        <Route key="Overview" path="/Overview" element={<Overview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;