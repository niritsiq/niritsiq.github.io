import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Medical Event Extractor',
            description: 'A local Python pipeline that reads medical PDFs (including scanned files), classifies unique clinical events, and outputs a structured JSON timeline. Built as an internal demo for insurance automation with OCR, heuristic event detection, Gemini-assisted field extraction, and deduplication across overlapping records.',
            icon: 'fas fa-file-medical',
            technologies: ['Python', 'Tesseract OCR', 'pdfplumber', 'Gemini API', 'Regex', 'Pytest', 'JSON'],
            githubLink: 'https://github.com/niritsiq/Elyon-AI.git'
        },
        {
            title: 'ThreatSignal AI',
            description: 'Automated cyber incident risk estimator combining Shodan attack surface data, OpenAI embeddings + FAISS breach similarity, SerpAPI news signals, GPT-4 reasoning, and Polymarket crowd predictions. Deployed live on Azure with a REST API.',
            icon: 'fas fa-shield-alt',
            technologies: ['Python', 'GPT-4', 'FAISS', 'Shodan API', 'SerpAPI', 'Azure', 'Docker'],
            githubLink: 'https://github.com/niritsiq/ThreatSignal-AI.git'
        },
        {
            title: 'Psychology Session Analyzer',
            description: 'Conversation analysis, topic identification and conversation themes, key moments detection, conversation timeline generation, speaker statistics and talk-time ratios, and dynamic relationship/conversation flow analysis on a microservices architecture: upload_service, video_processor_service, transcription_service, and analysis_service with FastAPI, RabbitMQ, Redis, PostgreSQL, MinIO, AssemblyAI, OpenAI, Datadog, and Docker Compose.',
            icon: 'fas fa-brain',
            technologies: ['FastAPI', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MinIO', 'AssemblyAI', 'OpenAI', 'Datadog', 'Docker Compose', 'FFmpeg', 'Microservices'],
            githubLink: 'https://github.com/niritsiq/Psychology-Session-Analyzer.git'
        },
        {
            title: 'Video Search Engine',
            description: 'A multimodal video search engine that downloads YouTube videos, detects scenes, generates AI captions with Moondream2, and supports two search modes: local fuzzy caption search and cloud-based Gemini 2.5 Flash video understanding. Results are displayed as a visual collage of matching frames.',
            icon: 'fas fa-film',
            technologies: ['Python', 'Gemini 2.5 Flash', 'Moondream2', 'PySceneDetect', 'yt-dlp', 'rapidfuzz'],
            githubLink: 'https://github.com/niritsiq/Video_search_engine.git'
        },
        {
            title: 'AI Investigator 1.0',
            description: 'A RAG system that answers questions about a mystery story using three approaches: a custom Naive RAG with hybrid cosine + keyword retrieval, LightRAG for fast semantic search, and Nano-GraphRAG which builds a knowledge graph to traverse entity relationships for deeper context.',
            icon: 'fas fa-search',
            technologies: ['Python', 'RAG', 'SentenceTransformer', 'LightRAG', 'Nano-GraphRAG', 'Knowledge Graph'],
            githubLink: 'https://github.com/niritsiq/Story-Investigator.git'
        },
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