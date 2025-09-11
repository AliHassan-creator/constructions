import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="construction-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <h3 className="big-title">SERVICES</h3>


            <div className="mini-label bottom">— HOME /SERVICES</div>
          </div>

          <div className="hero-right"></div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="services-grid">
            {/* First Row */}
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
                <h3>Architectural Design & Planning</h3>
                <p>Creative architectural solutions with innovative designs and meticulous planning for residential and commercial projects.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
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
                <h3>Construction Management</h3>
                <p>Comprehensive project management services ensuring timely completion and quality control throughout the construction process.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            {/* Second Row */}
            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"}}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 22H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 2H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 22V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 22V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 22V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Interior Design & Finishing</h3>
                <p>Elegant interior design solutions with premium finishing touches to transform spaces into beautiful, functional environments.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L18 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 19L6 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Renovation & Remodeling</h3>
                <p>Expert renovation services to upgrade and transform existing structures with modern designs and improved functionality.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 2V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 2V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Infrastructure Development</h3>
                <p>Comprehensive infrastructure solutions including roads, bridges, and utilities with focus on durability and sustainability.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            {/* Third Row */}
            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"}}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Landscape Architecture</h3>
                <p>Beautiful landscape design services that harmonize built environments with natural surroundings for enhanced aesthetics.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Structural Assessment</h3>
                <p>Comprehensive structural evaluation and analysis to ensure building integrity, safety, and compliance with regulations.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>

            <div className="service-card">
              <div 
                className="service-image" 
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"}}
              ></div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Sustainable Construction</h3>
                <p>Eco-friendly building practices and materials that reduce environmental impact while maintaining structural integrity.</p>
                <Link to="/service-details" className="read-more-btn" style={{ textDecoration: 'none', color: '#000' }}>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;