import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ThemeContext, ThemeProvider} from "./context/ThemeContext";
import React, {useContext, useEffect} from "react";
import "./styles/App.css";
import {AnimatedRoutes} from "./components/AnimatedRoutes";

export const MainApp: React.FC = ()=> {
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <Header />
                <AnimatedRoutes />
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