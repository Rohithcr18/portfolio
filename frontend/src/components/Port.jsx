import React, { useEffect } from 'react';
import './Port.css';
import image from '../assets/im.png';
import axios from 'axios';

export default function Port() {
  useEffect(() => {
    // Mobile Menu Functions
    function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.toggle('active');
    }
    function closeMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu.classList.remove('active');
    }
    document.querySelectorAll('.mobile-menu-toggle').forEach(el => {
      el.onclick = toggleMobileMenu;
    });
    document.querySelectorAll('.mobile-menu a').forEach(el => {
      el.onclick = closeMobileMenu;
    });
    document.addEventListener('click', function(event) {
      const mobileMenu = document.getElementById('mobileMenu');
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (!mobileMenu.contains(event.target) && !toggle.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    });
    // Create Floating Particles
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
        particlesContainer.appendChild(particle);
      }
    }
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    // Parallax Effect
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const bgDecoration = document.querySelector('.bg-decoration');
      if (bgDecoration) {
        bgDecoration.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    });
    // Skills Animation
    function animateSkills() {
      const skillBars = document.querySelectorAll('.skill-progress');
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.setProperty('--width', width);
            entry.target.style.animationPlayState = 'running';
          }
        });
      });
      skillBars.forEach(bar => {
        observer.observe(bar);
      });
    }
    // Form Submission
    const setupForm = ()=> {
      const form = document.querySelector('.contact-form form');
      if (form) {
        form.addEventListener('submit', async function(e) {
          e.preventDefault();
          const btn = form.querySelector('.submit-btn');
          const originalText = btn.textContent;
          btn.textContent = 'Sending...';
          btn.style.opacity = '0.7';

          // Collect form data
          const formData = {
            name: form.querySelector('input[placeholder="Your Name"]').value,
            email: form.querySelector('input[placeholder="Your Email"]').value,
            subject: form.querySelector('input[placeholder="Subject"]').value,
            message: form.querySelector('textarea[placeholder="Your Message"]').value
          };

          try {
            await axios.post('https://portfolio-vhb2.onrender.com/api/contact/', formData);
            btn.textContent = 'Message Sent!';
            btn.style.background = 'linear-gradient(45deg, #9370DB, #8A2BE2)';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.opacity = '1';
              btn.style.background = 'linear-gradient(45deg, #8A2BE2, #9370DB)';
              form.reset();
            }, 2000);
          } catch {
            btn.textContent = 'Error! Try Again';
            btn.style.background = 'red';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.opacity = '1';
              btn.style.background = 'linear-gradient(45deg, #8A2BE2, #9370DB)';
            }, 2000);
          }
        });
      }
    }
    // Initialize
    createParticles();
    animateSkills();
    setupForm();
    // Add entrance animation classes
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.5s ease-in';
    }, 100);
    // Interactive Cursor Effect
    document.addEventListener('mousemove', function(e) {
      let cursor = document.querySelector('.cursor');
      if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `position: fixed;width: 20px;height: 20px;background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);border-radius: 50%;pointer-events: none;z-index: 9999;transition: all 0.1s ease;`;
        document.body.appendChild(newCursor);
      }
      const cursorElement = document.querySelector('.cursor');
      cursorElement.style.left = e.clientX - 10 + 'px';
      cursorElement.style.top = e.clientY - 10 + 'px';
    });
    // Cleanup listeners on unmount
    return () => {
      // Remove all event listeners and dynamic elements if needed
    };
  }, []);

  return (
    <>
      <div className="cinematic-bg"></div>
      <div className="particles" id="particles"></div>
      <div className="vignette"></div>
      <div className="bg-decoration"></div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              ROHITH <span className="green">C R</span>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <div className="mobile-menu" id="mobileMenu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          {/* Home Section */}
          <section id="home" className="hero">
            <div className="hero-content">
              <h1>
                Hey I&apos;m <span className="name">ROHITH C R</span><br />
                I&apos;m a <span className="role">B.TECH STUDENT</span>
              </h1>
              <p>To secure a challenging position in the IT industry where I can apply my technical skills, gain practical experience, and contribute to innovative projects. Eager to grow as a developer while learning from real-world industry environments.</p>
              <div className="social-links">
                <a href="https://leetcode.com/u/RohithCR/" title="leetcode">L</a>
                <a href="https://github.com/Rohithcr18" title="GitHub">⚡</a>
                <a href="#" title="LinkedIn">in</a>
              </div>
              <button type="button" className="hire-btn">Hire me</button>
            </div>
            <div className="hero-image">
              <div className="portrait">
                <img src={image} alt="ROHITH C R" />
                <div className="floating-elements"></div>
              </div>
            </div>
          </section>
          {/* About Section */}
          <section id="about" className="about-section">
            <div className="section-header">
              <h2>About <span className="green">Me</span></h2>
              <div className="section-line"></div>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>To secure a challenging position in the IT industry where I can apply my technical skills, gain practical experience, and contribute to innovative projects. Eager to grow as a developer while learning from real-world industry environments.</p>
                <div className="about-stats"></div>
              </div>
              <div className="about-image">
                <img src={image} alt="ROHITH C R" className="about-portrait" />
              </div>
              <section>
                
              </section>
            </div>
          </section>
          {/* Skills Section */}
          <section id="skills" className="skills-section">
            <div className="section-header">
              <h2>My <span className="green">Skills</span></h2>
              <div className="section-line"></div>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Design Tools</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <span>Figma</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="95%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>Davnic</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>Photoshop</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>After Effects</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80%"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Development</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <span>HTML/CSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="75%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>React</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="70%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>java</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span>C/C++</span>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="70%"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="soft-skills">
                  <div className="soft-skill">Creative Thinking</div>
                  <div className="soft-skill">Problem Solving</div>
                  <div className="soft-skill">Team Collaboration</div>
                  <div className="soft-skill">User Research</div>
                  <div className="soft-skill">Project Management</div>
                  <div className="soft-skill">Communication</div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section id="services" className="services-section">
            <div className="section-header">
              <h2>My <span className="green">Services</span></h2>
              <div className="section-line"></div>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and engaging user interfaces with a focus on user experience and visual appeal.</p>
                <ul>
                  <li>User Interface Design</li>
                  <li>User Experience Design</li>
                  <li>Design Systems</li>
                </ul>
              </div>
            
              <div className="service-card">
                <div className="service-icon">🌐</div>
                <h3>Web Design</h3>
                <p>Crafting modern, responsive websites that look great and perform exceptionally across all devices.</p>
                <ul>
                  <li>Website Design</li>
                  <li>Landing Pages</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3>Mobile Design</h3>
                <p>Designing beautiful Things.</p>
                <ul>
                  <li>Designing</li>
                  <li>poster Making</li>
                  <li>logo Designing</li>
                  <li>Video Editing</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="section-header">
              <h2>Get In <span className="green">Touch</span></h2>
              <div className="section-line"></div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let&apos;s Create Something Amazing Together</h3>
                <p>I&apos;m always excited to work on new projects and collaborate with amazing people. Whether you have a project in mind or just want to chat about design, feel free to reach out!</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <h4>Email</h4>
                      <p>rohithrt1402@email.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📱</div>
                    <div>
                      <h4>Phone</h4>
                      <p>+919842868885</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h4>Location</h4>
                      <p>PERUNDURAI,ERODE-638057</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows={5} required></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo">
                ROHITH<span className="green">C R</span>
              </div>
              <p>Creating digital experiences that inspire and engage.</p>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                <a href="https://github.com/Rohithcr18" title="GitHub">⚡</a>
                <a href="https://leetcode.com/u/RohithCR/" title="leetcode">L</a>
                <a href="#" title="LinkedIn">in</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 ROHITH C R. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
