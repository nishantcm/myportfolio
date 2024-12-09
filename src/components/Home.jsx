import Container from "react-bootstrap/Container";

export default function Home() {
    return (
        <Container>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src={} className="d-block w-100"></img> */}
                        <div className="carousel-caption">
                            <h6>Hello !</h6>
                            <h1>I'm Nishant CM</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* <img src={} className="d-block w-100"></img> */}
                    </div>
                    <div className="carousel-item">
                        {/* <img src={} className="d-block w-100"></img> */}
                    </div>
                </div>
            </div>
        </Container>
    );
}