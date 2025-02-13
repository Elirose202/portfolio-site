import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Elirose202" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/eli-farrell-tud/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Eli Farrell</h1>
          <p>Full Stack Engineer</p>
          <br />
          <p>
            Hi! Thank you for taking the time to view my portfolio site!. I am a Software Engineer with strong industry experience C# .Net development for 
            platforms including Windows, Quest 2, Android, Hololens, and WebGL. I have a strong 
            passion for programming and a proven track record of delivering successful 
            multi-platform projects. 
          </p>
          <br />
          <p></p>
      
          <div className="mobile_social_icons">
            <a href="https://github.com/Elirose202" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/eli-farrell-tud/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;