import React from 'react';
import '../styles/Projects.css'
const Projects: React.FC = () => {
    return <div className='projects-page'>
        <section className='projects-card'>
            <div className='projects-card-list'><p className='header'>Мои проекты</p>
                <div className='project-card-item'>
                    <p>Разработка сайта</p>
                    <img src="../src/assets/mouth-site-full.jpg" alt="" />

                </div>
                <div className='project-card-item'>
                    <p>Разработка сайта</p>
                    <img src="../src/assets/sail-club.jpg" alt="" />

                </div>
                <div className='project-card-item'>
                    <p>Дизайн сайта</p>
                    <img src="../src/assets/design-vlru.jpg" alt="" />

                </div>
                <div className='project-card-item'>
                    <p>Разработка сайта</p>
                    <img src="../src/assets/social-site.jpg" alt="" />
                </div>
            </div>
        </section>
    </div>;
};

export default Projects;