import { Link } from 'react-router-dom';
import '../styles/Header.css';
import {ThemeContext} from "../context/ThemeContext.tsx";
import {useContext} from "react";

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`main-header ${theme}`}>
            <ul className='header-list'>

                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
                <li>
                    <button onClick={toggleTheme}>
                        {theme === "light" ? "Dark" : "Light"}
                    </button>
                </li>
            </ul>

        </header>

    );
};