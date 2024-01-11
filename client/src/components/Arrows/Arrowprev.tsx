import { ImCircleLeft } from "react-icons/im";
import "../Arrows/Arrows.css";
type PrevArrowProps = {
  onClick?: () => void, 
}
function SamplePrevArrow({ onClick }: PrevArrowProps) {
  // const { className, style, onClick } = props;
  return (
    <div className="arrow-prev" onClick={onClick}>
      <ImCircleLeft />
    </div>
  );
}
export default SamplePrevArrow;


