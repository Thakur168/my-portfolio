import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
