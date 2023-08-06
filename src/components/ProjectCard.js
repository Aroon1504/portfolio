import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, image, github }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} />
                <a href={github}>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
} 
