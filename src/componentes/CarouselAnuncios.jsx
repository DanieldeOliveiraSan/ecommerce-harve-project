import { Carousel } from "react-bootstrap";

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/MGVZX423/image-1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/Hns7wHTk/image-2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/hvL7xrzc/image-3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export { CarouselAnuncios };
