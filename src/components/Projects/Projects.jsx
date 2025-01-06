import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import { FaMemory, FaFish } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'MemoryMaster',
            description: 'A Java-based Memory Card Game that supports 1-4 players. Test your memory by finding matching pairs of cards!',
            icon: 'fas fa-memory',
            technologies: ['Java', 'Console Game', 'Multiplayer'],
            githubLink: 'https://github.com/niritsiq/MemoryMaster'
        },
        {
            title: 'Cat Fish Game',
            description: 'A fun two-player cat-and-fish game where players control cats trying to catch falling fish while preventing them from hitting the bottom of the screen.',
            icon: 'fas fa-fish',
            technologies: ['Jack', 'Game Development', '2-Player'],
            githubLink: 'https://github.com/niritsiq/CatFishGame'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2620/2620735.png"
                    alt="Projects"
                    className="section-image"
                    data-aos="zoom-in"
                />
                <h2 data-aos="fade-down">My Projects</h2>
                <div className="projects-showcase">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 