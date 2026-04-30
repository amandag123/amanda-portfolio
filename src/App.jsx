import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const openGallery = () => {
    setPage("gallery");
    window.scrollTo(0, 0);
  };

  const openHome = () => {
    setPage("home");
    window.scrollTo(0, 0);
  };

  if (page === "gallery") {
    return <GalleryPage openHome={openHome} />;
  }


  return (
    <div className="page">
      <header className="navbar">
        <div className="logo">Amanda Guerra</div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="tagline fullTagline">
          Electrical Engineering Student  • Student Researcher  •  Robotics Mentor
        </p>

        <div className="heroText">
          <h1>Building practical engineering solutions with purpose, teamwork, and impact.</h1>
          <p className="heroParagraph">
            I am an Electrical Engineering student at The University of Texas Rio Grande Valley with experience in
            energy efficiency research, circuit design, robotics mentorship, and STEM outreach
            across South Texas.
          </p>
          <div className="buttonRow">
            <a className="button primary" href="#projects">View My Work</a>
            <a className="button secondary" href="#contact">Contact Me</a>
            <a className="button resumeButton" href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>

        <div className="heroCard profileCard">
          <img className="profileImage" src="/images/headshot.jpg" alt="Amanda Guerra" />
          <h2>Amanda Guerra</h2>
          <p className="profileSubtitle">Electrical Engineering Student at UTRGV</p>
          <p><strong>Focus Areas:</strong> Energy efficiency, circuit design, technical writing, and robotics</p>
          <p><strong>Strength:</strong> Turning technical data into clear and useful recommendations</p>
        </div>
      </section>

      <section id="about" className="section">
        <p className="sectionLabel">About Me</p>
        <h2>Engineering with both technical detail and real-world usefulness.</h2>
        <p>
          My work sits at the intersection of electrical engineering, energy efficiency, robotics, and community
          impact. I enjoy taking raw information, whether it is facility data, circuit measurements, or project
          requirements, and turning it into something useful, clear, and actionable.
        </p>
        <p>
          Through my research role at UTRGV and my mentorship in FIRST Robotics, I have learned how to communicate
          technical ideas, work with teams, support students, and build solutions that matter beyond the classroom.
        </p>

        <div className="aboutPhotoGrid">
          <img src="/images/about1.png" alt="Engineering work" />
          <img src="/images/about2.png" alt="Robotics outreach" />
          <img src="/images/about3.png" alt="Student leadership" />
        </div>
      </section>

      <section id="experience" className="section darkSection">
        <p className="sectionLabel">Experience</p>
        <h2>What I have been working on</h2>

        <div className="experienceList">
          <div className="experienceCard">
            <div>
              <h3>Student Researcher</h3>
              <p className="company">Industrial Training and Assessment Center, UTRGV</p>
            </div>
            <p className="date">Aug 2025 – Present</p>
            <p>
              Support industrial energy assessments by analyzing facility data, researching equipment and labor costs,
              building cost-savings models, and writing client-ready technical recommendations.
            </p>
          </div>

          <div className="experienceCard">
            <div>
              <h3>FIRST Robotics Mentor and Volunteer</h3>
              <p className="company">South Texas FIRST Robotics Community</p>
            </div>
            <p className="date">2024 – Present</p>
            <p>
              Mentor robotics students, support FRC and FTC teams, assist with events, and help create accessible STEM
              opportunities for students in the Rio Grande Valley.
            </p>
          </div>

          <div className="experienceCard">
            <div>
              <h3>Marketing Chair</h3>
              <p className="company">Society of Hispanic Professional Engineers, UTRGV</p>
            </div>
            <p className="date">2026 – Present</p>
            <p>
              Create promotional content, support chapter communication, and help increase student engagement through
              clear and consistent marketing.
            </p>
          </div>
        </div>

        <div className="galleryButtonWrapper">
        <button className="galleryButton" onClick={openGallery}>
          View Project Gallery
        </button>
       </div>
      </section>

      <section id="projects" className="section">
        <p className="sectionLabel">Featured Work</p>
        <h2>Projects and impact</h2>

        <div className="projectGrid">
          <div className="projectCard">
            <p className="projectType">Energy Efficiency / ITAC</p>
            <h3>Occupancy Sensor Energy Savings Model</h3>
            <p>
              Created an Excel-based template to estimate energy savings, demand savings, implementation cost, and
              payback period for industrial occupancy sensor retrofits.
            </p>
            <p className="impact">
              <strong>Impact:</strong> Helped streamline technical recommendations using limited facility data, utility
              bills, and lighting schedules.
            </p>
          </div>

          <div className="projectCard">
            <p className="projectType">Renewable Energy / Industrial Assessment</p>
            <h3>Photovoltaic Solar Array Recommendation</h3>
            <p>
              Worked on refining a roof-based photovoltaic solar recommendation for an industrial facility in McAllen,
              Texas using facility statistics and estimated annual energy production.
            </p>
            <p className="impact">
              <strong>Impact:</strong> Connected engineering calculations with practical implementation decisions for
              client-ready reporting.
            </p>
          </div>

          <div className="projectCard">
            <p className="projectType">Leadership / STEM Outreach</p>
            <h3>FIRST Robotics Mentorship</h3>
            <p>
              Mentored students through FRC and FTC robotics, supported event operations in South Texas, and helped
              expand access to STEM opportunities for students across the Rio Grande Valley.
            </p>
            <p className="impact">
              <strong>Impact:</strong> Contributed to outreach, team sustainability, student leadership, and regional
              STEM growth.
            </p>
          </div>

          <div className="projectCard">
            <p className="projectType">Electrical Engineering Coursework</p>
            <h3>Circuit Design and Laboratory Projects</h3>
            <p>
              Designed, built, and tested circuits involving logic gates, multiplexers, ripple-carry adders, 555 timers,
              RC/RL/RLC behavior, and measurement-based analysis.
            </p>
            <p className="impact">
              <strong>Impact:</strong> Built hands-on experience with breadboards, IC chips, power supplies,
              multimeters, oscilloscopes, and technical lab reporting.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section darkSection">
        <p className="sectionLabel">Skills</p>
        <h2>Technical strengths</h2>

        <div className="skills">
          <span>C++</span>
          <span>MATLAB</span>
          <span>Excel Modeling</span>
          <span>Circuit Design</span>
          <span>CAD Modeling</span>
          <span>Soldering</span>
          <span>Technical Writing</span>
          <span>Data Analysis</span>
          <span>Energy Efficiency</span>
          <span>Robotics</span>
          <span>Autodesk</span>
          <span>OSHA Certified</span>
          <span>Arduino</span>
          <span>Computer Numerical Control</span>
          <span>Mentorship</span>
          <span>Revit</span>
          <span>PSPICE</span>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <p className="sectionLabel">Contact</p>
        <h2>Let’s connect.</h2>
        <p>
          I am interested in engineering internships, research opportunities, robotics outreach, and projects where
          technical work can make a real impact.
        </p>

        <div className="contactBox">
          <p><strong>Email:</strong> amanda.guerra1245@gmail.com</p>
          <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/amanda-guerra-1a2623326/</p>
          <p><strong>Github:</strong> https://github.com/amandag123</p>
        </div>

        <div className="resumeButtonWrapper">
          <a className="button primary" href="/resume.pdf" target="_blank" rel="noreferrer">
            Open My Resume
          </a>
        </div>
        </section>

      <footer>
        <div className="builtBy">
          <p>Hey! I built this website myself (from scratch).</p>
          <span className="footerArrow">↓</span>
          <a
            className="footerCodeButton"
            href="https://github.com/amandag123/amanda-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Check it out
          </a>
        </div>

          <p className="copyright">© 2026 Amanda Guerra. Personal engineering portfolio.</p>
        </footer>
    </div>
  );
}

function GalleryPage({ openHome }) {
 const galleryImages = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png",
    "/images/gallery8.png",
    "/images/gallery9.png",
    "/images/gallery10.png",
    "/images/gallery11.png",
    "/images/gallery12.png",
    "/images/gallery13.png",
    "/images/gallery14.png",
    "/images/gallery15.png",
    "/images/gallery16.png",
  ];

  return (
    <div className="page">
      <header className="navbar">
        <div className="logo" onClick={openHome}>Amanda Guerra</div>
        <nav>
          <button className="navButton" onClick={openHome}>Back to Home</button>
        </nav>
      </header>

      <main className="galleryPage">
        <div className="galleryHeader">
          <p className="sectionLabel">Project Gallery</p>
          <h1 className="galleryPageTitle">Labs, Projects, and Engineering Work</h1>
        </div>

        <div className="photoOnlyGrid">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project and lab photo ${index + 1}`}
              className="galleryOnlyImage"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;