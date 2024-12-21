import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Mission from './mission';
import Publications from './publications';
import ResearchProjects from './research_projects';
import Team from './team';

// Home Page Component
function Home() {
    return (
        <>
            {/* Header Section */}
            <section className="header">
                <h1>Prasanna Krishnan's Lab @ Uniformed Services University</h1>
                <p>Assistant Professor | Cell Biologist | Researcher</p>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h2>About The Lab</h2>
                <p>
                    My name is Prasanna Krishnan and I am a very cool mom. I 
                    have a Ph.D. so I am basically a doctor too. My research interests include protein misfolding, 
                    cellular metabolic pathways, and structural biology. The endoplasmic reticulum is my favorite organelle.
                </p>
            </section>

        {/* 2x2 Grid Section */}
        <section className="grid-section">
            <h2>Explore</h2>
            <div className="grid-container">
                <div className="grid-item">
                    <Link to="/mission" className="grid-link">Mission</Link>
                </div>
                <div className="grid-item">
                    <Link to="/publications" className="grid-link">Publications</Link>
                </div>
                <div className="grid-item">
                    <Link to="/research-projects" className="grid-link">Research Projects</Link>
                </div>
                <div className="grid-item">
                    <Link to="/team" className="grid-link">Meet the Team</Link>
                </div>
            </div>
        </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <h2>Contact</h2>
                <ul>
                    <li>Email: <a href="mailto:prasanna.satpute@gmail.com">prasanna.satpute@gmail.com</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/cellbiologist/">linkedin.com/in/cellbiologist</a></li>
                    <li>Bluesky: <a href="https://www.bluesky.app">bluesky.app/username</a></li>
                </ul>
            </section>
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Navigation Bar */}
                <header className="navbar">
                    <div className="logo">
                        <HashLink smooth to="/#">Home</HashLink> {/* Updated Home link */}
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/mission">Mission</Link></li>
                            <li><Link to="/publications">Publications</Link></li>
                            <li><Link to="/research_projects">Research Projects</Link></li>
                            <li><Link to="/team">Meet the Team</Link></li>
                            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                        </ul>
                    </nav>
                </header>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/research_projects" element={<ResearchProjects />} />
                    <Route path="/team" element={<Team />} />
                </Routes>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Prasanna Krishnan. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
