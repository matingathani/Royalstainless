import drum from "../images/drum.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Product/product.css";

export default function Slider(images) {
  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      
    >
      <div>
        <img className="product_img"  style={{width:"100%" ,height:"100%"}} src={images.first} />
      </div>
      <div>
        <img  className="product_img" style={{width:"100%" ,height:"100%"}}  src={images.second} />
      </div>
      <div>
        <img className="product_img" style={{width:"100%" ,height:"100%"}} src={images.third} />
      </div>
    </Carousel>
  );
}
