import React from 'react';

const ProjectDetails = () => {
  return (
    <div className="construction-page">
      {/* Hero Section with "About Us" heading */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">

            <h1 className="big-title">PROJECT DETAILS</h1>


            <div className="mini-label bottom">— HOME / PROJECT DETAILS</div>
          </div>

          <div className="hero-right"></div>
        </div>
      </section>


      {/* New Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="centered-image">
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Engineering techniques" 
            />
          </div>
          
          <div className="text-content">
            <p>
              Our engineering techniques and implementation processes are designed to deliver exceptional results across various industries. We combine innovative approaches with proven methodologies to ensure that every project meets the highest standards of quality and efficiency. Our team of experienced engineers leverages cutting-edge technology to solve complex challenges and deliver sustainable solutions that stand the test of time.
            </p>
            
            <h2>Our Main Goal</h2>
            
            <p>
              Whether you're looking to optimize existing systems, implement new technologies, or develop innovative solutions from scratch, our team has the expertise to guide you through every step of the process. We offer comprehensive engineering services tailored to your specific needs, ensuring that your projects are completed on time, within budget, and to the highest quality standards. Let us help you transform your ideas into reality with our technical expertise and industry knowledge.
            </p>

            <h2>Take a look to our challenges</h2>
            
            <p>
              From initial planning and design to execution and long-term maintenance, we provide end-to-end engineering solutions that align with your strategic goals. Our multidisciplinary team collaborates closely with clients to understand their unique challenges, enabling us to deliver customized strategies that drive measurable results. By combining technical precision with innovative problem-solving, we ensure that every project not only meets its objectives but also creates lasting value for your organization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
