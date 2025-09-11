import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';
import BlogSingle from './BlogSingle';
import BlogDetail from './BlogDetail';
import Element from './Element';
import './App.css';

export default function ConstructionHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      
      // Header show/hide logic
      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      // Back to top button logic - show when scrolled down, hide at the very top
      if (currentY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      lastScrollY.current = currentY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDropdownToggle = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

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

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Ethan Welch",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 2,
      name: "Ethan Welch",
      position: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Ethan Welch",
      position: "Architect",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 4,
      name: "Ethan Welch",
      position: "Site Supervisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Notitia omta tiderom. Dessa sida innertyttjänkdel är en navigator vid resultatviser en gula media partisan. Exotyperligen strategier som upplatera den sida innertyttjänkdelens realtement avsättning av måste utbildningskompetens samt helst omträderom. Dessa sida innertyttjänkdel är en vägligt en vikt installation en gula medalliga platser. Exotyperligen strategier.",
      name: "John Smith",
      position: "CEO, Construction Inc.",
      rating: 3
    },
    {
      id: 2,
      text: "We were extremely impressed with the quality of work and professionalism shown by the Construction team. They delivered our project on time and within budget, exceeding our expectations at every turn. I would highly recommend their services to anyone looking for reliable construction partners.",
      name: "Sarah Johnson",
      position: "Project Manager, Real Estate Group",
      rating: 5
    },
    {
      id: 3,
      text: "The attention to detail and craftsmanship displayed by this team is exceptional. They transformed our vision into reality and provided valuable insights throughout the process. Communication was excellent, and the final result speaks for itself.",
      name: "Michael Rodriguez",
      position: "Homeowner",
      rating: 4
    },
    {
      id: 4,
      text: "As a commercial property developer, I've worked with many construction firms, but none have matched the expertise and efficiency of this team. Their innovative solutions saved us both time and money without compromising on quality.",
      name: "Emily Chen",
      position: "Development Director",
      rating: 5
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Testimonial navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <Router basename="/constructions">
      <div className="construction-page">
        <header className={`site-header ${hidden ? 'hide' : ''}`}>
          <div className="top-strip">
            <div className="top-left">+1(123) 1234-567-8901 &nbsp; | &nbsp; info@domain.com</div>
            <div className="top-right">Mon - Sat 8:00 - 17:30, Sunday - CLOSED</div>
          </div>

          <nav className="main-nav">
            <div className="brand">
              <div className="logo-mark">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="6" height="16" stroke="#ff6a00" strokeWidth="1.2" fill="transparent" rx="1" />
                  <rect x="10" y="6" width="12" height="12" stroke="#ff6a00" strokeWidth="1.2" fill="transparent" rx="1" />
                  <rect x="12" y="8" width="2" height="2" fill="#ff6a00" />
                  <rect x="16" y="8" width="2" height="2" fill="#ff6a00" />
                  <rect x="12" y="12" width="2" height="2" fill="#ff6a00" />
                </svg>
              </div>
              <Link to="/" className="brand-text" style={{ textDecoration: 'none', color: 'inherit' }}>Construction</Link>
            </div>

            <ul 
              className={`nav-links ${menuOpen ? 'open' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                &times;
              </button>
              <li className="nav-item"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
              <li className="nav-item"><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
              <li className="nav-item"><Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link></li>
              <li className="nav-item"><Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link></li>
              
              {/* Blog Dropdown */}
              <li 
                className="dropdown-parent"
                onMouseEnter={() => setActiveDropdown('blog')}
                onMouseLeave={() => {
                  if (!menuOpen) setActiveDropdown(null);
                }}
              >
                <span 
                  onClick={() => menuOpen && handleDropdownToggle('blog')}
                  className="dropdown-trigger"
                >
                  Blog
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'blog' ? 'active' : ''}`}>
                  <li className="nav-item"><Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link></li>
                  <li className="nav-item"><Link to="/blog-details" style={{ textDecoration: 'none', color: 'inherit' }}>Blog Details</Link></li>
                </ul>
              </li>
              
              {/* Pages Dropdown */}
              <li 
                className="dropdown-parent"
                onMouseEnter={() => setActiveDropdown('pages')}
                onMouseLeave={() => {
                  if (!menuOpen) setActiveDropdown(null);
                }}
              >
                <span 
                  onClick={() => menuOpen && handleDropdownToggle('pages')}
                  className="dropdown-trigger"
                >
                  Pages
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <ul className={`dropdown-menu ${activeDropdown === 'pages' ? 'active' : ''}`}>
                  <li className="nav-item"><Link to="/element" style={{ textDecoration: 'none', color: 'inherit' }}>Element</Link></li>
                  <li className="nav-item"><Link to="/project-details" style={{ textDecoration: 'none', color: 'inherit' }}>Project Details</Link></li>
                  <li className="nav-item"><Link to="/service-details" style={{ textDecoration: 'none', color: 'inherit' }}>Services Details</Link></li>
                </ul>
              </li>
              
              <li className="nav-item"><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
            </ul>

            <div className="right-controls">
              <Link to="/contact" className="cta" style={{ textDecoration: 'none', color: 'inherit' }}>CONTACT NOW</Link>
              <button 
                className={`hamburger ${menuOpen ? 'is-active' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)} 
                aria-label="menu"
                aria-expanded={menuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </header>

        {/* Overlay for when menu is open */}
        {menuOpen && (
          <div 
            className="nav-overlay active"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/blog" element={<BlogSingle />} />
            <Route path="/blog-details" element={<BlogDetail />} />
            <Route path="/element" element={<Element />} />
            <Route path="/" element={
              <>
                <section className="hero">
                  <div className="hero-overlay"></div>

                  <div className="hero-content">
                    <div className="hero-left">
                      <div className="mini-label">— HAND CAR WASH AND DETAILING SERVICE</div>

                      <h1 className="big-title">ADVANCED</h1>

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

                          <text x="0" y="145" className="svg-outline">CONSTRUCTION</text>
                          <text x="0" y="145" className="svg-fill">CONSTRUCTION</text>
                        </svg>
                      </div>

                      <div className="mini-label bottom">— OUR SERVICES</div>
                    </div>

                    <div className="hero-right"></div>
                  </div>
                </section>

                {/* Our Services Section */}
                <section className="services-section">
                  <div className="container">
                    <h2 className="section-title">OUR SERVICES</h2>
                    <div className="services-grid">
                      <div className="service-card">
                        <div 
                          className="service-image" 
                          style={{backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
                        ></div>
                        <div className="service-content">
                          <div className="service-icon">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h3>Engineering techniques & implementation</h3>
                          <p>Professional engineering solutions with modern techniques and precise implementation for your construction needs.</p>
                          <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
                        </div>
                      </div>

                      <div className="service-card">
                        <div 
                          className="service-image" 
                          style={{backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
                        ></div>
                        <div className="service-content">
                          <div className="service-icon">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 7H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16 7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 3L16 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h3>Engineering techniques & implementation</h3>
                          <p>Professional engineering solutions with modern techniques and precise implementation for your construction needs.</p>
                          <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
                        </div>
                      </div>

                      <div className="service-card">
                        <div 
                          className="service-image" 
                          style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
                        ></div>
                        <div className="service-content">
                          <div className="service-icon">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 18L18 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 18L6 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 14V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h3>Engineering techniques & implementation</h3>
                          <p>Professional engineering solutions with modern techniques and precise implementation for your construction needs.</p>
                          <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Who We Are Section */}
                <section className="services-section">
                  <div className="container">
                    <div className="who-we-are-grid">
                      <div className="who-we-are-text-column">
                        <h2 className="section-title who-we-are-title">WHO WE ARE</h2>
                        <div className="who-we-are-text">
                          <p className="intro-text">
                            <strong>Mollit anim laborum duis au dolor in voluptate velit ess cilium dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit ciliu.</strong>
                          </p>
                          <p>
                            Mollit anim laborum.Dvcuis aute iruxvfg dijkolohr in re voluptate velit essciliumlore eu quife mulla parihatur. Excojneopteur sfwsignjnt occa cupidatat non aute iruxvfg diijinulpadeserunt mollitemnth incididbnt ut;oStu layjobore mollitt anim.
                          </p>
                          <div className="read-more-container">
                            <Link to="/about" className="read-more-btn" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</Link>
                          </div>
                        </div>
                      </div>
                      <div className="who-we-are-image-column">
                        <div className="who-we-are-image">
                          <img 
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Construction team working together" 
                          />
                        </div>
                      </div>
                    </div>
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
                            <div className="project-overlay">
                              <div className="project-category">{project.category}</div>
                              <h3 className="project-title">{project.title}</h3>
                              <Link to="/project-details" className="project-view-btn" style={{ textDecoration: 'none', color: 'inherit' }}>View Project</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Let's Talk With Us Section */}
                <section className="lets-talk-section">
                  <div className="container">
                    <div className="lets-talk-content">
                      <div className="lets-talk-text">
                        <h2 className="lets-talk-title">LETS TALK WITH US</h2>
                        <p className="lets-talk-description">
                          There are a lot more about the country, students or managers with disabilities in order to help protect
                          the people of property and socialization such as both ethnic labour and awareness to address such
                          topless marital acts.
                        </p>
                      </div>
                      <div className="lets-talk-stats">
                        <div className="stat-item">
                          <div className="stat-number">34</div>
                          <div className="stat-label">MACHINERY</div>
                          <div className="stat-subtitle">Tools</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">76</div>
                          <div className="stat-label">MACHINERY</div>
                          <div className="stat-subtitle">Tools</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">08</div>
                          <div className="stat-label">MACHINERY</div>
                          <div className="stat-subtitle">Tools</div>
                        </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Team Section */}
              <section className="team-section">
                <div className="container">
                  <h2 className="section-title">OUR TEAM</h2>
                  <div className="team-grid">
                    {teamMembers.map(member => (
                      <div key={member.id} className="team-card">
                        <div 
                          className="team-image"
                          style={{backgroundImage: `url(${member.image})`}}
                        ></div>
                        <div className="team-content">
                          <h3 className="team-name">{member.name}</h3>
                          <p className="team-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Testimonial Section */}
              <section className="testimonial-section">
                <div className="container">
                  <h2 
                    className="section-title" 
                    style={{ color: "white" }}
                  >
                    TESTIMONIAL
                  </h2>

                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      <p>
                        {testimonials[currentTestimonial].text}
                      </p>
                    </div>
                    <div className="testimonial-rating">
                      <div className="rating-item">
                        <h3>{testimonials[currentTestimonial].name}</h3>
                        <p>{testimonials[currentTestimonial].position}</p>
                        <div className="rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`star ${i < testimonials[currentTestimonial].rating ? 'filled' : ''}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial Navigation */}
                    <div className="testimonial-navigation" style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center'
                    }}>
                      {/* Dots indicator */}
                      <div style={{ display: 'flex', gap: '8px', marginRight: '15px' }}>
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              border: 'none',
                              backgroundColor: index === currentTestimonial ? '#ff6a00' : 'rgba(255,255,255,0.3)',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      {/* Navigation buttons */}
                      <button
                        onClick={prevTestimonial}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#ff6a00';
                          e.target.style.borderColor = '#ff6a00';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.1)';
                          e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                        }}
                        aria-label="Previous testimonial"
                      >
                        ‹
                      </button>
                      
                      <button
                        onClick={nextTestimonial}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#ff6a00';
                          e.target.style.borderColor = '#ff6a00';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'rgba(255,255,255,0.1)';
                          e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                        }}
                        aria-label="Next testimonial"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Latest News Section */}
              <section className="latest-news-section">
                <div className="container">
                  <h2 className="section-title">LATEST NEWS</h2>
                  <div className="latest-news-grid">
                    {/* First News Item */}
                    <div className="news-card">
                      <div className="news-number">No. 1</div>
                      <div className="news-content">
                        <div className="news-category">Properties</div>
                        <h3 className="news-title">Footprints in Time is perfect House in Kuraainki</h3>
                        <Link to="/blog" className="news-read-more-btn" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</Link>
                      </div>
                      <div 
                        className="news-image"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')"}}
                      ></div>
                    </div>

                    {/* Second News Item */}
                    <div className="news-card">
                      <div className="news-number">No. 2</div>
                      <div className="news-content">
                        <div className="news-category">Properties</div>
                        <h3 className="news-title">Footprints in Time is perfect House in Kuraainki</h3>
                        <Link to="/blog-details" className="news-read-more-btn" style={{ textDecoration: 'none', color: 'inherit' }}>READ MORE</Link>
                      </div>
                      <div 
                        className="news-image"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80')"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>
              </>
            } />
          </Routes>
        </main>

        {/* Footer Section */}
<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h3 className="footer-title">Construction</h3>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Quick Links</h4>
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Contact</h4>
        <div className="contact-info">
          <p>198 West 21th Street, Suite 721 New York, NY 10010</p>
          <p>Phone: +95(0)123 456 789</p>
          <p>Cell: +95(0)123 456 789</p>
        </div>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Email Address</h4>
        <div className="email-signup" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: "1",
              padding: "12px 15px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              minWidth: "250px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          />
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="copyright">
        Copyright ©2025 All rights reserved | This template is made with 💤 by Colorlib
      </p>
    </div>
  </div>
</footer>


        {/* Back to Top Button */}
        <button 
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </Router>
  );
}