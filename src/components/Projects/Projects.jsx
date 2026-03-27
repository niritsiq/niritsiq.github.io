import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

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
        },
        {
            title: 'Gear-Lens App',
            description: 'A full-stack PWA app that recognizes cars in real time using AI. Users can collect cars, compete in challenges, and join leagues with friends. Built with React, Node.js, and SQLite, featuring image recognition, leaderboards, and virtual car upgrades.',
            customImage: '/images/gear-lens-logo.png',
            technologies: ['React', 'Node.js', 'SQLite', 'OpenAI Vision API', 'AI/ML', 'Google OAuth', 'PWA'],
            githubLink: 'https://github.com/Gear-Lens/App-independent/tree/improvements'
        },
        {
            title: 'ShowSuggesterAI',
            description: 'A Python recommendation engine that learns your TV taste, suggests the most similar shows with fast vector search, then creates two brand-new fictional series and cinematic AI posters based on your favorites and recommendations.',
            icon: 'fas fa-robot',
            technologies: ['Python', 'TheFuzz', 'OpenAI Embeddings', 'USearch (HNSW)', 'Google Vertex AI Gemini 2.0', 'Google Vertex AI Imagen 3'],
            githubLink: 'https://github.com/niritsiq/ShowSuggesterAI.git'
        },
        {
            title: 'Mega Coder',
            description: 'An AI-powered Python coding assistant with four modes: program generation and auto-fixing, GitHub repository analysis, real-time screen OCR code tips, and prompt improvement for faster project planning.',
            icon: 'fas fa-code',
            technologies: ['Python', 'Google Gemini', 'OpenAI GPT-5 mini', 'gitingest', 'RapidOCR', 'pylint', 'python-dotenv'],
            githubLink: 'https://github.com/niritsiq/Mega_coder.git'
        },
        {
            title: 'Algotrading',
            description: 'A real-time CrewAI trading bot where market, news/sentiment, risk, and execution agents collaborate on BUY/SELL/HOLD decisions using live Alpaca and SerpAPI data, then execute validated trades on an Alpaca paper account.',
            icon: 'fas fa-chart-line',
            technologies: ['Python', 'CrewAI', 'Alpaca Paper Trading API', 'SerpAPI (News + Google Trends)', 'Ollama (llama3.2)', 'Pytest'],
            githubLink: 'https://github.com/niritsiq/Algotrading.git'
        },
        {
            title: 'Garage Management System',
            description: 'A layered C# OOP garage system with separated Logic/UI projects that manages multiple vehicle types, file-based loading, status workflows, wheel inflation, refuel/recharge operations, and robust validation with custom exceptions.',
            icon: 'fas fa-car',
            technologies: ['C#', '.NET', 'OOP', 'Layered Architecture', 'Console App', 'SOLID Principles'],
            githubLink: 'https://github.com/niritsiq/Garage-Management-System-'
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="projects-container">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2620/2620735.png"
                    alt="Projects"
                    className="projects-section-image"
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