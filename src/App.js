import {BrowserRouter as BR, Routes, Route} from 'react-router-dom'
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NewProject from './components/pages/NewProject';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BR>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/project/:id" element={<Project/>} />
        </Routes>
      </Container>
      <Footer />
    </BR>
  )
}

export default App;
