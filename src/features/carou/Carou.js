import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Carou({ children }) {

  return (
    <>
    
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carousel_img1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carousel_img2.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>

       
    </>
  );
}

export default Carou;
