import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Header} from './components/Header.tsx'
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { Footer } from "./components/Footer";
import React from "react";

const App: React.FC = ()=>{
    return(
        <div>
            <Router>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;