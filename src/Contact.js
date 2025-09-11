import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="mini-label">— GET IN TOUCH WITH US</div>
            
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

                <text x="0" y="145" className="svg-outline">CONTACT</text>
                <text x="0" y="145" className="svg-fill">CONTACT</text>
              </svg>
            </div>

            <div className="mini-label bottom">— SEND US A MESSAGE</div>
          </div>
          <div className="hero-right"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Get in Touch</h2>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Enter Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Enter Message"></textarea>
                </div>
                <button type="submit" className="submit-btn">S E N D</button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="info-item">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
              
              <div className="info-item">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
              
              <div className="info-item">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;