import {Link} from "react-router-dom";
import "../styles/Header.css";
import {ThemeContext} from "../context/ThemeContext";
import {Theme} from "../constants/Theme";
import {useContext} from "react";

const navItem = [
    {path: "/about", label: "About"},
    {path: "/skills", label: "Skills"},
    {path: "/", label: "Home"},
    {path: "/projects", label: "Projects"},
    {path: "/contacts", label: "Contact"},
];
export const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={`main-header ${theme}`}>
            <ul className="header-list">
                {navItem.map((item) => (
                    <li key={item.path}>
                        <Link to = {item.path}>{item.label}</Link>
                    </li>
                ))}
                <li>
                    <button onClick={toggleTheme}>
                        {theme === Theme.Light ? "Dark" : "Light"}
                    </button>
                </li>
            </ul>
        </header>
    );
};