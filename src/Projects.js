import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Modern Office Building",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Luxury Residential Villa",
      category: "residential",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Highway Bridge Construction",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 4,
      title: "Shopping Mall Renovation",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 5,
      title: "Apartment Complex",
      category: "residential",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80"
    },
    {
      id: 6,
      title: "Water Treatment Plant",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 7,
      title: "Corporate Headquarters",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 8,
      title: "Suburban Housing Development",
      category: "residential",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
    },
    {
      id: 9,
      title: "Railway Expansion Project",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="construction-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">

            <h1 className="big-title">Our</h1>

            <div className="construction-svg-wrap" aria-hidden>
              <svg viewBox="0 0 1200 220" preserveAspectRatio="xMinYMid meet" className="construction-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="wavePattern" patternUnits="userSpaceOnUse" width="1200" height="200" patternTransform="translate(0,0)">
                    <rect width="1200" height="200" fill="rgba(255,106,0,0.1)" />
                    <path d="M0,100 Q300,50 600,100 T1200,100 V200 H0 Z" fill="#ff6a00" opacity="0.8">
                      <animate attributeName="d" 
                               dur="8s" 
                               repeatCount="indefinite" 
                               values="M0,100 Q300,50 600,100 T1200,100 V200 H0 Z;
                                       M0,100 Q300,150 600,100 T1200,100 V200 H0 Z;
                                       M0,100 Q300,50 600,100 T1200,100 V200 H0 Z" />
                    </path>
                    <path d="M0,120 Q300,70 600,120 T1200,120 V200 H0 Z" fill="#ff6a00" opacity="0.6">
                      <animate attributeName="d" 
                               dur="10s" 
                               repeatCount="indefinite" 
                               values="M0,120 Q300,70 600,120 T1200,120 V200 H0 Z;
                                       M0,120 Q300,170 600,120 T1200,120 V200 H0 Z;
                                       M0,120 Q300,70 600,120 T1200,120 V200 H0 Z" />
                    </path>
                  </pattern>
                </defs>

                <text x="0" y="145" className="svg-outline">Projects</text>
                <text x="0" y="145" className="svg-fill">Projects</text>
              </svg>
            </div>

            <div className="mini-label bottom">— Home / Project</div>
          </div>

          <div className="hero-right"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">OUR PROJECTS</h2>
          
          {/* Category Filter Buttons */}
          <div className="projects-filter">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveCategory('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveCategory('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'infrastructure' ? 'active' : ''}`}
              onClick={() => setActiveCategory('infrastructure')}
            >
              Infrastructure
            </button>
          </div>
          
          {/* Projects Grid */}
          <div className="projects-grid">
  {filteredProjects.map(project => (
    <div key={project.id} className="project-card">
      <div 
        className="project-image"
        style={{backgroundImage: `url(${project.image})`}}
      >
        {/* Place the category tag here, outside the overlay */}
        <div className="project-category">{project.category}</div>
        <div className="project-overlay">
          <h3 className="project-title">{project.title}</h3>
          <Link to="/project-details" className="project-view-btn" style={{ textDecoration: 'none', color: 'inherit' }}>View Project</Link>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
};

export default Projects;