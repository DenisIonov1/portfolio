import { Link } from 'react-router-dom';
import '../styles/Header.css';

export const Header = () => {
    return (
        <header className='main-header'>
            <ul className='header-list'>

                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
            </ul>
        </header>

    );
};
