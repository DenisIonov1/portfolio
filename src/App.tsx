import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { Header } from './components/Header.tsx'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from './pages/Contacts';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Footer } from "./components/Footer";
import {ThemeContext, ThemeProvider} from "./context/ThemeContext.tsx";
import React, {useContext, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import './styles/App.css'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
};
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/contacts" element={<PageTransition><Contacts /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export const MainApp: React.FC = ()=>{
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return(
        <>
            <Header />
            <div>
                <AnimatedRoutes />
            </div>
            <Footer />
        </>
    );
};

export const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Router>
                <MainApp />
            </Router>
        </ThemeProvider>
    );
};