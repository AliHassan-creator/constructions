import React from 'react';

const ServiceDetails = () => {
  return (
    <div className="element-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <h1 
              className="big-title" 
              style={{ fontSize: "48px" }}
            >
              Engineering techniques & implementation
            </h1>
          </div>
          <div className="hero-right"></div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="centered-image">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
              alt="Engineering techniques" 
            />
          </div>
          
          <div className="text-content">
            <p>
              Our engineering techniques and implementation processes are designed to deliver exceptional results across various industries. We combine innovative approaches with proven methodologies to ensure that every project meets the highest standards of quality and efficiency. Our team of experienced engineers leverages cutting-edge technology to solve complex challenges and deliver sustainable solutions that stand the test of time.
            </p>
            
            <h2>How can we help?</h2>
            
            <p>
              Whether you're looking to optimize existing systems, implement new technologies, or develop innovative solutions from scratch, our team has the expertise to guide you through every step of the process. We offer comprehensive engineering services tailored to your specific needs, ensuring that your projects are completed on time, within budget, and to the highest quality standards. Let us help you transform your ideas into reality with our technical expertise and industry knowledge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
