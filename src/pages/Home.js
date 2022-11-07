import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppsIcon from "@mui/icons-material/Apps";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is San 👋 👋</h2>
        <div className="prompt">
          <p>
            Soy un Desarrollador que le apasiona aprender y crear nuevas cosas.
          </p>
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, NPM, Material UI, Tailwind Css, Chakra UI.</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Express.JS, MongoDB, MySQL, PostgreSQL, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Cloud</h2>
            <span>Netlify, Vercel , Heroku</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
