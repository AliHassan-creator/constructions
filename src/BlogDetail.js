import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="mini-label">— BLOG DETAILS</div>
            <h1 className="big-title">SINGLE BLOG</h1>

            <div className="mini-label bottom">— READ THE FULL ARTICLE</div>
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
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying. Lights and seasons created days the. Heaven moving. You're appear which together. So was. Is have may every can't upon their without of and. Also. You'll life. Above. You'll second light. Good two sixth under. Brought. Doesn't you'll. Heaven. Forth. Give. Made. Own. For you're. Place. You'll.</p>
                  
                  <p>You're appear which together. So was. Is have may every can't upon their without of and. Also. You'll life. Above. You'll second light. Good two sixth under. Brought. Doesn't you'll. Heaven. Forth. Give. Made. Own. For you're. Place. You'll.</p>
                  
                  <blockquote className="blog-quote">
                    <p>"Working at Google has been an incredible journey of innovation and growth. The new office space reflects our commitment to creating environments that inspire creativity."</p>
                    <cite>- Sundar Pichai, CEO of Google</cite>
                  </blockquote>
                  
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying. Lights and seasons created days the. Heaven moving. You're appear which together. So was. Is have may every can't upon their without of and. Also. You'll life. Above. You'll second light. Good two sixth under. Brought. Doesn't you'll. Heaven. Forth. Give. Made. Own. For you're. Place. You'll.</p>
                  
                  <div className="post-meta">
                    <span className="post-category">Travel, Lifestyle</span>
                    <span className="post-comments">03 Comments</span>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="comments-section">
                <h3 className="comments-title">03 Comments</h3>
                
                <div className="comment-list">
                  {/* Comment 1 */}
                  <div className="comment">
                    <div className="comment-avatar">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" alt="User avatar" />
                    </div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <h4 className="comment-author">John Doe</h4>
                        <span className="comment-date">January 15, 2023 at 3:12 pm</span>
                      </div>
                      <p className="comment-text">Great article! I've been following Google's expansion plans and this new office looks amazing. The design seems very innovative and employee-friendly.</p>
                      <button className="comment-reply">Reply</button>
                    </div>
                  </div>
                  
                  {/* Comment 2 */}
                  <div className="comment">
                    <div className="comment-avatar">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80" alt="User avatar" />
                    </div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <h4 className="comment-author">Sarah Johnson</h4>
                        <span className="comment-date">January 15, 2023 at 4:30 pm</span>
                      </div>
                      <p className="comment-text">I love how Google continues to prioritize sustainable architecture in their new buildings. The green spaces and energy-efficient design are impressive!</p>
                      <button className="comment-reply">Reply</button>
                    </div>
                  </div>
                  
                  {/* Comment 3 */}
                  <div className="comment">
                    <div className="comment-avatar">
                      <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="User avatar" />
                    </div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <h4 className="comment-author">Michael Chen</h4>
                        <span className="comment-date">January 16, 2023 at 9:45 am</span>
                      </div>
                      <p className="comment-text">As a tech worker, I appreciate companies that invest in their office environments. This looks like a fantastic place to work and collaborate.</p>
                      <button className="comment-reply">Reply</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave a Reply Section */}
              <div className="reply-section">
                <h3 className="reply-title">Leave a Reply</h3>
                <p className="reply-subtitle">Your email address will not be published. Required fields are marked *</p>
                
                <form className="reply-form">
                  <div className="form-row">
                    <div className="form-group">
                      <textarea placeholder="Comment *" rows="5" required></textarea>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" placeholder="Name *" required />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Email *" required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input type="text" placeholder="Website" />
                  </div>
                  
                  <div className="form-checkbox">
                    <input type="checkbox" id="save-info" />
                    <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                  
                  <button type="submit" className="submit-btn">POST COMMENT</button>
                </form>
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

export default BlogDetail;