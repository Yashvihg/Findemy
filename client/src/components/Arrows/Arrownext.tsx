import { ImCircleRight } from "react-icons/im";
import "../Arrows/Arrows.css";
type NextArrowProps = {
    onClick?: () => void, 
  }
function SampleNextArrow({onClick}: NextArrowProps) {
    return (
        <div className="arrow-next" onClick={onClick}>
          <ImCircleRight/>
        </div>
      );
}

export default SampleNextArrow;
