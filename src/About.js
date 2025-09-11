import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
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
    <div className="construction-page">
      {/* Hero Section with "About Us" heading */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="mini-label">— ABOUT OUR COMPANY</div>

            <h1 className="big-title">ABOUT US</h1>


            <div className="mini-label bottom">— Home / Product</div>
          </div>

          <div className="hero-right"></div>
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

    </div>
  );
};

export default About;