import React from 'react';
import { Link } from 'react-router-dom';

const BlogSingle = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="mini-label">— LATEST NEWS AND ARTICLES</div>
            <h1 className="big-title">BLOG</h1>

            <div className="mini-label bottom">— READ OUR LATEST ARTICLES</div>
          </div>
          <div className="hero-right"></div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content-section">
        <div className="container">
          <div className="blog-layout">
            {/* Main Blog Content */}
            <div className="blog-main">
              {/* Featured Post */}
              <div className="blog-post featured-post">
                <div className="post-header">
                  <div className="post-date">
                    <span className="date-day">15</span>
                    <span className="date-month">Jan</span>
                  </div>
                  <h1 className="post-title">Google inks pact for new 35-storey office</h1>
                </div>
                
                <div className="post-image">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Google office building" />
                </div>
                
                <div className="post-content">
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                  
                  <div className="post-meta">
                    <span className="post-category">Travel, Lifestyle</span>
                    <span className="post-comments">03 Comments</span>
                  </div>
                </div>
              </div>

              {/* Additional Blog Posts */}
              <div className="blog-posts-grid">
                {/* Post 1 */}
                <div className="blog-post-card">
                  <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Tech conference" />
                  </div>
                  <div className="post-date">
                    <span className="date-day">12</span>
                    <span className="date-month">Jan</span>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Future of Technology in Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    <div className="post-meta">
                      <span className="post-category">Technology</span>
                      <span className="post-comments">08 Comments</span>
                    </div>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="blog-post-card">
                  <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Food" />
                  </div>
                  <div className="post-date">
                    <span className="date-day">10</span>
                    <span className="date-month">Jan</span>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Best Restaurants in New York</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    <div className="post-meta">
                      <span className="post-category">Food</span>
                      <span className="post-comments">12 Comments</span>
                    </div>
                  </div>
                </div>

                {/* Post 3 */}
                <div className="blog-post-card">
                  <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Travel" />
                  </div>
                  <div className="post-date">
                    <span className="date-day">08</span>
                    <span className="date-month">Jan</span>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Top Travel Destinations for 2023</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    <div className="post-meta">
                      <span className="post-category">Travel</span>
                      <span className="post-comments">05 Comments</span>
                    </div>
                  </div>
                </div>

                {/* Post 4 */}
                <div className="blog-post-card">
                  <div className="post-image">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Business meeting" />
                  </div>
                  <div className="post-date">
                    <span className="date-day">05</span>
                    <span className="date-month">Jan</span>
                  </div>
                  <div className="post-content">
                    <h3 className="post-title">Effective Remote Team Management</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    <div className="post-meta">
                      <span className="post-category">Business</span>
                      <span className="post-comments">15 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Sidebar */}
            <div className="blog-sidebar">
              {/* Search Widget */}
              <div className="blog-widget">
                <h3 className="widget-title">Search Keyword</h3>
                <div className="search-widget">
                  <input type="text" placeholder="SEARCH" />
                  <button className="search-btn">SEARCH</button>
                </div>
              </div>

              {/* Category Widget */}
              <div className="blog-widget">
                <h3 className="widget-title">Category</h3>
                <ul className="category-list">
                  <li><Link to="#">Restaurant food (37)</Link></li>
                  <li><Link to="#">Travel news (10)</Link></li>
                  <li><Link to="#">Modern technology (03)</Link></li>
                  <li><Link to="#">Product (11)</Link></li>
                  <li><Link to="#">Inspiration (21)</Link></li>
                  <li><Link to="#">Health Care (15)</Link></li>
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="blog-widget">
                <h3 className="widget-title">Recent Post</h3>
                <div className="recent-posts">
                  <div className="recent-post">
                    <h4 className="recent-post-title">From life was you fish...</h4>
                    <span className="recent-post-date">January 02, 2018</span>
                  </div>
                  <div className="recent-post">
                    <h4 className="recent-post-title">The Amazing Hubble</h4>
                    <span className="recent-post-date">02 Hours ago</span>
                  </div>
                  <div className="recent-post">
                    <h4 className="recent-post-title">Astronomy Or Astrology</h4>
                    <span className="recent-post-date">03 Hours ago</span>
                  </div>
                  <div className="recent-post">
                    <h4 className="recent-post-title">Asteroids telescope</h4>
                    <span className="recent-post-date">01 Hours ago</span>
                  </div>
                </div>
              </div>

              {/* Tag Clouds Widget */}
              <div className="blog-widget">
                <h3 className="widget-title">Tag Clouds</h3>
                <div className="tag-clouds">
                  <span className="tag">project</span>
                  <span className="tag">love</span>
                  <span className="tag">technology</span>
                  <span className="tag">travel</span>
                  <span className="tag">restaurant</span>
                  <span className="tag">life-style</span>
                  <span className="tag">design</span>
                  <span className="tag">illustration</span>
                  <span className="tag">food</span>
                  <span className="tag">business</span>
                </div>
              </div>

              {/* Instagram Feeds Widget */}
              <div className="blog-widget">
                <h3 className="widget-title">Instagram Feeds</h3>
                <div className="instagram-feeds">
                  <div className="instagram-item">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80" alt="Instagram post" />
                  </div>
                  <div className="instagram-item">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80" alt="Instagram post" />
                  </div>
                  <div className="instagram-item">
                    <img src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Instagram post" />
                  </div>
                  <div className="instagram-item">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80" alt="Instagram post" />
                  </div>
                  <div className="instagram-item">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80" alt="Instagram post" />
                  </div>
                  <div className="instagram-item">
                    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Instagram post" />
                  </div>
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="blog-widget">
                <h3 className="widget-title">Newsletter</h3>
                <div className="newsletter-widget">
                  <input type="email" placeholder="Enter email" />
                  <button className="subscribe-btn">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;