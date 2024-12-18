import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mission from './mission';
import Publications from './publications';
import ResearchProjects from './research_projects';
import Team from './team';

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Navigation Bar */}
                <header className="navbar">
                    <div className="logo">
                        <Link to="/">Prasanna Krishnan</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><Link to="/publications">Publications</Link></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

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
                            <Link to="/mission">Mission</Link>
                        </div>
                        <div className="grid-item">
                            <Link to="/publications">Publications</Link>
                        </div>
                        <div className="grid-item">
                            <Link to="/research-projects">Research Projects</Link>
                        </div>
                        <div className="grid-item">
                            <Link to="/team">Meet the Team</Link>
                        </div>
                    </div>
                </section>
                {/* 2x2 Grid Section */}
                <section className="grid-section">
                    <h2>Explore</h2>
                    <div className="grid-container">
                        <div className="grid-item">
                            <a href="/mission" target="_self">Mission</a>
                        </div>
                        <div className="grid-item">
                            <a href="/publications" target="_self">Publications</a>
                        </div>
                        <div className="grid-item">
                            <a href="/research-projects" target="_self">Research Projects</a>
                        </div>
                        <div className="grid-item">
                            <a href="/team" target="_self">Meet the Team</a>
                        </div>
                    </div>
                </section>


                {/* Routes */}
                <Routes>
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/research-projects" element={<ResearchProjects />} />
                    <Route path="/team" element={<Team />} />
                </Routes>

                {/* Contact Section */}
                <section id="contact" className="contact">
                    <h2>Contact Me</h2>
                    <ul>
                        <li>Email: <a href="mailto:prasanna.satpute@gmail.com">prasanna.satpute@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com">linkedin.com/in/username</a></li>
                        <li>ResearchGate: <a href="https://www.researchgate.net">researchgate.net/username</a></li>
                    </ul>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Prasanna Krishnan. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
