import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import '../resume.css';

export default function ResumePage() {
    return(
        <>
            <Navbar/>
            <div className='resume-container'>
                <div className='resume-header'>
                    <h1>Charles (Will) Gillespie</h1>
                    <p>Connecticut, CT 06484 | Phone: (203) 906-7242 | Email: Charlesgillespiew@gmail.com</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/charles-gillespie-b22888280/">https://www.linkedin.com/in/charles-gillespie-b22888280/</a></p>
                    <p>GitHub: <a href="https://github.com/CharlesWGillespie">https://github.com/CharlesWGillespie</a></p>
                    <p>Portfolio: <a href="https://charleswgillespie.netlify.app/">https://charleswgillespie.netlify.app/</a></p>
                </div>
                <div className='resume-summary'>
                    <h2>SUMMARY</h2>
                    <p>Junior Full-Stack developer.</p>
                    <p>Earned a certificate in Full Stack Web Development from the University of Connecticut’s Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, project planning and execution.</p>
                </div>
                <div className='resume-skills'>
                    <h2>TECHNICAL SKILLS</h2>
                    <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Material-UI,Node, Handlebars, jQuery, Bootstrap</p>
                </div>
                <div className='resume-projects'>
                    <h2>PROJECTS</h2>
                    <p className='p-projects'><Link to="/projects">Here!</Link></p>
                </div>
                <div className='resume-experience'>
                    <h2>PROFESSIONAL EXPERIENCE</h2>
                    <p><strong>Apprentice Lineman | 2021-2023</strong></p>
                    <p>IBEW Local 42, Connecticut, CT</p>
                    <p>An apprentice under IBEW local 42 maintaining Connecticut's grid by servicing, repairing and installing new power lines and all equipment needed for power.</p>
                    <p><strong>Key Accomplishments:</strong></p>
                    <ul>
                        <li>Played a pivotal role in restoring power promptly to customers during storm emergencies.</li>
                        <li>Successfully progressed through five out of seven program steps, demonstrating dedication and competence.</li>
                        <li>Acquired invaluable teamwork skills and technical expertise in maintaining Connecticut's power grid.</li>
                    </ul>
                    <p><strong>Fence Installer | 2023–Present</strong></p>
                    <p>Jays Fence, Connecticut, CT</p>
                    <p>Installing fences for houses and businesses.</p>
                    <p><strong>Key Accomplishments:</strong></p>
                    <ul>
                        <li>Consistently delivered high-quality fence installations, exceeding customer expectations and ensuring satisfaction.</li>
                        <li>Demonstrated precision and efficiency in installing fences for both residential and commercial properties.</li>
                    </ul>
                </div>
                <div className='resume-education'>
                    <h2>EDUCATION</h2>
                    <p>Certificate, Full Stack Web Development</p>
                    <p>University of Connecticut | March, 2024</p>
                    <p>Online</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}
