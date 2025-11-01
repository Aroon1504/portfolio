import { Container, Row, Col } from "react-bootstrap";
import aws_img from "../../assets/img/aws.png";
import java_img from "../../assets/img/java.png";
import react_img from "../../assets/img/react.png";
import spring_img from "../../assets/img/spring.png";
import javascript_img from "../../assets/img/js.png";
import python_img from "../../assets/img/python.png";
import "./Skills.css";

export const Skills = () => {
  const skills = [
    {
      skill_name: "Java",
      skill_img: java_img,
    },
    {
      skill_name: "Spring",
      skill_img: spring_img,
    },
    {
      skill_name: "AWS",
      skill_img: aws_img,
    },
    {
      skill_name: "JavaScript",
      skill_img: javascript_img,
    },
    {
      skill_name: "React",
      skill_img: react_img,
    },
    {
      skill_name: "Python",
      skill_img: python_img,
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="skill-icon-wrapper">
                      <img
                        src={skill.skill_img}
                        className="skill-img"
                        alt={skill.skill_name}
                      />
                    </div>
                    <h4>{skill.skill_name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
