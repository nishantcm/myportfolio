import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function About(){
    return (
        <Container>
            <Row>
                <Col md={5}>
                </Col>
                <Col md={7} className="text-white">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Nulla nihil, sequi omnis deleniti deserunt ullam doloribus? Ipsam ipsa quaerat nam.
                    </p>
                    <p><span className="fw-bold">Name:</span> Nishant CM</p>
                    <p><span className="fw-bold">Date of Birth:</span> 11th July 2001</p>
                    <p><span className="fw-bold">Address:</span> Curchorem Goa India</p>
                    <p><span className="fw-bold">Pin Code:</span> 403706</p>
                    <p><span className="fw-bold">Email:</span> cmnishantwork@gmail.com</p>
                    <p><span className="fw-bold">Phone:</span> 7522962280</p>
                </Col>
            </Row>
        </Container>
    );
}