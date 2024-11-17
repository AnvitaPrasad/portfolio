import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Orb": {
        title: "Orb",
        desc:
          "A galactic adventure where we skip the star of the show (pun intended)",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/AnvitaPrasad/solar-system-minus-sun",
        open: "https://solarsystemminussun.netlify.app",
        image: "/assets/solarsystem.png"
      },
      "CS Club Website": {
        title: "CS Club Website",
        desc:
          "Currently working on an interactive and engaging website for the CS Club at IIITDM Kancheepuram",
        techStack: "REACT.JS",
        link: "https://github.com/CSClubIIITDM/club-website",
        open: "https://github.com/CSClubIIITDM/club-website",
        image: "/assets/csclub.png"
      },
      "Movie Review Aggregator": {
        title: "Movie Review Aggregator",
        desc:
          "A web-based tool designed to aggregate and analyze movie reviews by scraping content from movie review web pages.",
        techStack: "FIRECRAWL SDK, GEMINI API, PYTHON, FLASK",
        link: "https://github.com/AnvitaPrasad/Movie-Review-Aggregator",
        open: "https://github.com/AnvitaPrasad/Movie-Review-Aggregator",
        image: "/assets/movie.png"
      },
      "KanBan Board": {
        title: "KanBan Board",
        desc:
          "A dynamic Kanban board application for streamlined task management",
        techStack: "REACT.JS",
        link: "https://github.com/AnvitaPrasad/Kanban-board",
        open: "https://anvitas-kanban-board.netlify.app",
        image: "/assets/kanban.png"
      },
    };
    const projects = {
      "Sentiment Analysis of Product Reviews": {
        desc:
          "A web-based tool that performs sentiment analysis on product reviews",
        techStack: "Firecrawl SDK, Gemini API, python, flask",
        link: "https://github.com/AnvitaPrasad/Sentiment-analysis-of-product-reviews",
        open: "https://github.com/AnvitaPrasad/Sentiment-analysis-of-product-reviews"
      },
      "Blackjack": {
        desc:
          "A simple and engaging Blackjack game implementation that lets players test their luck and strategy against the dealer.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/AnvitaPrasad/Blackjack",
        open: "https://github.com/AnvitaPrasad/Blackjack"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
