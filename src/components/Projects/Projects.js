import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gituser from "../../Assets/Projects/gituser.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import apna from "../../Assets/Projects/apna.png";
import movie from "../../Assets/Projects/1.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="movieDB"
              description="movie details with IMDb: 7.8
              Release Date and you can search and also check details of movies"
              ghLink="https://github.com/kumarvivekpandey/movixapp"
              demoLink="https://movixapp-mu.vercel.app/"
            />
          </Col>

          < Col md = {4}
            className = "project-card" >
            < ProjectCard
            imgPath = {gituser}
            isBlog = {false}
            title = "GitUserFinder"
            description = "Discover GitHub users effortlessly with our user-friendly application, streamlining your search for developers and their repositories."
            ghLink = "https://github.com/kumarvivekpandey/gituserfinder"
            demoLink = "https://gituserfinder-neon.vercel.app/"
        />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Portfolio"
              description="My personal portfolio page build with react.js and Tailwind Css
               which is the virtual representation of my self ."
              
              ghLink="https://github.com/kumarvivekpandey/myportfolio"
              demoLink="https://myportfolio-delta-umber.vercel.app/"
            />
          </Col>

          {  /*

        
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apna}
              isBlog={false}
              title="Editor.io"
              description="Online MERN E-Commerce - Admin Panel, Redux Toolkit, Payment Gateway, Cloud Deployment, Emails"
              ghLink="https://github.com/kumarvivekpandey/Apnabazaar"
              demoLink="https://apnabazaar-mu.vercel.app/"              
            />
          </Col>
   {  /*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
