import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import AboutMe from './Components/AboutMe.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    // Add basename for GitHub Pages
    <Router basename="/resume/">
      <Header />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/about" />} /> {/* Redirect to About */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;