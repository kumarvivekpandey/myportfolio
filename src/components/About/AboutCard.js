import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Kumar </span>
            from <span className="purple">  India.</span>
            <br /> Passionate Software Engineer with a knack of learning ". Yes, technology and Innovation together brings success.
            <br />
            Additionally, I am currently employed as a software developer at
            EY (Ernst & Young).
            <br />
            Self Motivation + Commitment + Technology + Ideas + Team Player + Optimism - Motto of my life! 
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vivek </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
