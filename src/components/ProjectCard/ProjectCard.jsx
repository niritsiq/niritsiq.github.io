import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, icon, technologies, githubLink }) => {
    return (
        <div className="project-showcase-card" data-aos="fade-up">
            <div className="project-header">
                <i className={`project-icon ${icon}`}></i>
                <h3>{title}</h3>
            </div>
            <div className="project-content">
                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="project-actions">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                        <FaGithub />
                        View Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 