import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am an aspiring <b>Software Engineer</b> currently studying <b>Computer Science</b> at 
        <a href="https://www.iiitdm.ac.in/"> IIIT Kancheepuram</a>. I am deeply interested in 
        building impactful solutions and continuously expanding my skills in software development.
      </p>
    );
    const two = (
      <p>
          Outside of my studies, I play multiple musical instruments and enjoy following developments in 
          science and fashion. I’m also actively involved in tech communities, where I engage in knowledge 
          sharing and collaboration with like-minded individuals.
      </p>
    );

    const tech_stack = [
      "C/C++",
      "Python",
      "JavaScript",
      "React.js",
      "Node.js",
      "Next.js",
      "SQL"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Anvita Prasad" src={"/assets/anvita.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
