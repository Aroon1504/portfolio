import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aws_img from "../assets/img/aws.png";
import java_img from "../assets/img/java.png";
import react_img from "../assets/img/react.png";
import spring_img from "../assets/img/spring.png";
import javascript_img from "../assets/img/js.png";
import python_img from "../assets/img/python.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const skills = [ 
        {
            "skill_name" : "Java", 
            "skill_img" : java_img
        },
        {
            "skill_name" : "Spring", 
            "skill_img" : spring_img
        },
        {
            "skill_name" : "AWS", 
            "skill_img" : aws_img
        },
        {
            "skill_name" : "JavaScript", 
            "skill_img" : javascript_img
        },
        {
            "skill_name" : "React", 
            "skill_img" : react_img
        },
        {
            "skill_name" : "Python", 
            "skill_img" : python_img
        },
    ];

    const skillItems = () => {
        return skills.map( (skill) => (
            <div className="item">
                <img src={skill.skill_img} className = "skill-img" alt="aws img"/>
                <h4>{skill.skill_name}</h4>
            </div>
        ))
    }



    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                                {skillItems()}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}