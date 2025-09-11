import React, { useState } from 'react';

const Element = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="element-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="big-title">OUR ELEMENT</h1>
            <div className="mini-label bottom">— HOME / ELEMENT</div>
          </div>
          <div className="hero-right"></div>
        </div>
      </section>

      {/* Text Sample Section */}
      <section className="text-sample-section">
        <div className="container">
          <h2 className="section-title">Text Sample</h2>
          <div className="text-content">
            <p>
              Every avid independent filmmaker has <strong>Beld</strong> about making that <em>fatal</em> interest documentary, or short film to show off their creative prowess. Many have great ideas and want to 'wow' the same scene, or video stories with their big project. But once you have the answer, "In the car!" (no easy feat) how do you move from a <strong>Briefie</strong> through of master info with the LinkedIn® market-data-written title inside a series of content CD ads, to a pile of cardboard boxes full of shiny news, retail shop DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with its certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:
            </p>
          </div>
        </div>
      </section>

      {/* Sample Buttons Section */}
      <section className="buttons-section">
        <div className="container">
          <h2 className="section-title">Sample Buttons</h2>
          
          {/* Button Row 1 */}
          <div className="button-row">
            <button className="btn btn-default">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-link">Link</button>
            <button className="btn btn-disabled" disabled>Disable</button>
          </div>
          
          {/* Button Row 2 */}
          <div className="button-row">
            <button className="btn btn-default">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-link">Link</button>
            <button className="btn btn-disabled" disabled>Disable</button>
          </div>
          
          {/* Button Row 3 */}
          <div className="button-row">
            <button className="btn btn-default">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-link">Link</button>
            <button className="btn btn-disabled" disabled>Disable</button>
          </div>
          
          {/* Button Row 4 */}
          <div className="button-row">
            <button className="btn btn-default">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-link">Link</button>
            <button className="btn btn-disabled" disabled>Disable</button>
          </div>
          
          {/* Size Variants */}
          <div className="button-row">
            <button className="btn btn-primary btn-xl">Extra Large</button>
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary btn-md">Medium</button>
            <button className="btn btn-primary btn-sm">Small</button>
          </div>
          
          {/* Size Variants Row 2 */}
          <div className="button-row">
            <button className="btn btn-primary btn-xl">Extra Large</button>
            <button className="btn btn-primary btn-lg">Large</button>
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary btn-md">Medium</button>
            <button className="btn btn-primary btn-sm">Small</button>
          </div>
        </div>
      </section>

      {/* Left/Right Aligned Content Section */}
      <section className="alignment-section">
        <div className="container">
          
          {/* Left Aligned Content */}
          <div className="content-block left-aligned">
            <div className="content-text">
              <h3>Left Aligned</h3>
              <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
              </p>
            </div>
            <div className="content-image">
              <img src="https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Left aligned content" />
            </div>
          </div>


          {/* Right Aligned Content */}
          <div className="content-block right-aligned">
            <div className="content-text">
              <h3>Right Aligned</h3>
              <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
              </p>
            </div>
            <div className="content-image">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80" alt="Right aligned content" />
            </div>
          </div>
        </div>
      </section>

      {/* Definition and Block Quotes Section */}
      <section className="definition-section">
        <div className="container">
          <h2 className="section-title">Definition</h2>
          
          <div className="definition-list">
            <div className="definition-item">
              <h3 className="definition-title">Definition 01</h3>
              <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
              </p>
            </div>
            
            <div className="definition-item">
              <h3 className="definition-title">Definition 02</h3>
              <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
              </p>
            </div>
            
            <div className="definition-item">
              <h3 className="definition-title">Definition 03</h3>
              <p>
                Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks
              </p>
            </div>
          </div>
          
          <div className="divider-large"></div>
          
          <h2 className="section-title">Block Quotes</h2>
          
          <div className="block-quote">
            <p>
              Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking*
            </p>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="table-section">
        <div className="container">
          <h2 className="section-title">Table</h2>
          
          <div className="table-container">
            <table className="countries-table">
              <thead>
                <tr>
                  <th className="col-index">#</th>
                  <th className="col-country">COUNTRIES</th>
                  <th className="col-visits">VISITS</th>
                  <th className="col-percentages">PERCENTAGES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/ca.png" alt="Canada Flag" />
                      <span>Canada</span>
                    </div>
                  </td>
                  <td>645,032</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '90%'}}></div>
                      <span>90%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" />
                      <span>USA</span>
                    </div>
                  </td>
                  <td>563,245</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '78%'}}></div>
                      <span>78%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" />
                      <span>UK</span>
                    </div>
                  </td>
                  <td>423,765</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '65%'}}></div>
                      <span>65%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/au.png" alt="Australia Flag" />
                      <span>Australia</span>
                    </div>
                  </td>
                  <td>322,456</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '55%'}}></div>
                      <span>55%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/de.png" alt="Germany Flag" />
                      <span>Germany</span>
                    </div>
                  </td>
                  <td>298,123</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '48%'}}></div>
                      <span>48%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/fr.png" alt="France Flag" />
                      <span>France</span>
                    </div>
                  </td>
                  <td>264,890</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '42%'}}></div>
                      <span>42%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/jp.png" alt="Japan Flag" />
                      <span>Japan</span>
                    </div>
                  </td>
                  <td>201,567</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '35%'}}></div>
                      <span>35%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td>
                    <div className="country-flag">
                      <img src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" />
                      <span>Brazil</span>
                    </div>
                  </td>
                  <td>187,654</td>
                  <td>
                    <div className="percentage-bar">
                      <div className="bar-fill" style={{width: '30%'}}></div>
                      <span>30%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery-section">
        <div className="container">
          <h2 className="section-title">Image Gallery</h2>
          
          <div className="gallery-content">
            <div className="gallery-grid">
              <div className="gallery-item" onClick={() => openImageModal('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')}>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Gallery 1" />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </div>
              
              <div className="gallery-item" onClick={() => openImageModal('https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')}>
                <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Gallery 2" />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </div>
              
              <div className="gallery-item" onClick={() => openImageModal('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')}>
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Gallery 3" />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </div>
              
              <div className="gallery-item" onClick={() => openImageModal('https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')}>
                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Gallery 4" />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </div>
              
              <div className="gallery-item" onClick={() => openImageModal('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')}>
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Gallery 5" />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </div>
              
              <div className="gallery-item" onClick={() => openImageModal('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')}>
                <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8f极Hww&auto=format&fit=crop&w=500&q=60" alt="Gallery 6" />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </div>
            </div>
            <div className="gallery-headers">
            <h3>This is header 01</h3>
            <h3>This is header 02</h3>
            <h3>This is header 03</h3>
            <h3>This is header 04</h3>
            <h3>This is header 01</h3>
            <h3>This is header 01</h3>
          </div>
            <div className="gallery-lists">
              <div className="unordered-list">
                <h3>Unordered List</h3>
                <ul>
                  <li><span className="checkbox">○</span> Fta Keys</li>
                  <li><span className="checkbox">○</span> For Women Only Your Computer Usage</li>
                  <li><span className="checkbox">○</span> Facts Why Inkjet Printing Is Very Appealing</li>
                  <li><span className="checkbox">○</span> Addiction When Gambling Becomes</li>
                  <li><span className="checkbox">○</span> Protective Preventative Maintenance</li>
                  <li><span className="checkbox">○</span> Dealing With Technical Support 10 Useful Tips</li>
                  <li><span className="checkbox">○</span> Make Myspace Your Best Designed Space</li>
                  <li><span className="checkbox">○</span> Cleaning And Organizing Your Computer</li>
                </ul>
              </div>
              
              <div className="ordered-list">
                <h3>Ordered List</h3>
                <ol>
                  <li><span className="checkbox">○</span> Fta Keys</li>
                  <li><span className="checkbox">○</span> For Women Only Your Computer Usage</li>
                  <li><span className="checkbox">○</span> Facts Why Inkjet Printing Is Very Appealing</li>
                  <li><span className="checkbox">○</span> Addiction When Gambling Becomes</li>
                  <li><span className="checkbox">○</span> Protective Preventative Maintenance</li>
                  <li><span className="checkbox">○</span> Dealing With Technical Support 10 Useful Tips</li>
                  <li><span className="checkbox">○</span> Make Myspace Your Best Designed Space</li>
                  <li><span className="checkbox">○</span> Cleaning And Organizing Your Computer</li>
                </ol>
                <div className="additional-ordered">
                  <div>04. Dealing With Technical Support 10 Useful Tips</div>
                  <div>05. Make Myspace Your Best Designed Space</div>
                  <div>06. Cleaning And Organizing Your Computer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="form-element-section">
        <div className="container">
          <h2 className="section-title">Form Element</h2>
          
          <div className="form-content">
            <div className="form-container">
              <form className="main-form">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" />
                </div>
                
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" />
                </div>
                
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" />
                </div>
                
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" />
                </div>
                
                <div className="form-row">
                  <div className="form-group half-width">
                    <label>City</label>
                    <input type="text" />
                  </div>
                  
                  <div className="form-group half-width">
                    <label>Country</label>
                    <select>
                      <option>Select Country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4"></textarea>
                </div>
                
                <div className="form-group">
                  <label>Primary color</label>
                  <input type="text" />
                </div>
                
                <div className="form-group">
                  <label>Accent color</label>
                  <input type="text" />
                </div>
                
                <div className="form-group">
                  <label>Secondary color</label>
                  <input type="text" />
                </div>
              </form>
            </div>
            
            <div className="sidebar-container">
  <div className="switches-sidebar">
    <h3>Switches</h3>
    
    <div className="switch-item">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <span style={{ color: "black" }}>Sample Switch</span>
    </div>
    
    <div className="switch-item">
      <label className="switch">
        <input type="checkbox" defaultChecked />
        <span className="slider"></span>
      </label>
      <span style={{ color: "black" }}>Primary Color Switch</span>
    </div>
    
    <div className="switch-item">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <span style={{ color: "black" }}>Confirm Color Switch</span>
    </div>
  </div>

              
              <div className="select-sidebar">
                <h3>Selectboxes</h3>
                
                <div className="select-group">
                  <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
              
              <div className="checkboxes-sidebar">
                <h3>Checkboxes</h3>
                
                <div className="checkbox-item">
                  <label className="checkbox-container">
                    Sample Checkbox
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                
                <div className="checkbox-item">
                  <label className="checkbox-container">
                    Primary Color Checkbox
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                  </label>
                </div>
                
                <div className="checkbox-item">
                  <label className="checkbox-container">
                    Confirm Color Checkbox
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                
                <div className="checkbox-item">
                  <label className="checkbox-container disabled">
                    Disabled Checkbox
                    <input type="checkbox" disabled />
                    <span className="checkmark"></span>
                  </label>
                </div>
                
                <div className="checkbox-item">
                  <label className="checkbox-container disabled">
                    Disabled Checkbox active
                    <input type="checkbox" checked disabled />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeImageModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Element;