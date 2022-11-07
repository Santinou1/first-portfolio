import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2022 Santinoursino </p>
    </div>
  );
}

export default Footer;
