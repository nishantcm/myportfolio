import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
// import ExampleCarouselImage from 'react-bootstrap/components/ExampleCarouselImage';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        /> */}
        <Carousel.Caption>
            <Card className="bg-white w-100">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Card>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;