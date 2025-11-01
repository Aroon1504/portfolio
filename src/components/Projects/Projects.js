import { Col, Row, Nav, Tab, Container } from "react-bootstrap";
import grocery_img from "../../assets/img/Grocery_Application.jpg";
import handwriting_recognizer_img from "../../assets/img/handwriting_recognizer.jpg";
import abalone_img from "../../assets/img/abalone age prediction.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export const Projects = () => {
  const mobileApplicationProjects = [
    {
      title: "Grocery Application",
      description:
        "Developed a responsive e-commerce app with Flutter, Firebase integration, advanced search, and product categorization to enhance user experience.",
      image: grocery_img,
      github: "https://github.com/Aroon1504/Grocery-Application",
    },
    {
      title: "Handwriting Recognizer",
      description:
        "Designed and developed a versatile OCR application with a user-friendly Flutter UI, integrated Python server for OCR using py-tesseract, incorporated image processing algorithms for enhanced accuracy, and included a text editor for convenient text editing.",
      image: handwriting_recognizer_img,
      github: "https://github.com/Aroon1504/Handwriting-Recognizer",
    },
  ];

  const webApplicationProjects = [
    {
      title: "Abalone Age Prediction",
      description:
        "A ML based application developed using python, HTML, and CSS.",
      image: abalone_img,
      github: "https://github.com/Aroon1504/Abalone-Age-Prediction",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Mobile Application</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web Application</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {mobileApplicationProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {webApplicationProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row></Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
