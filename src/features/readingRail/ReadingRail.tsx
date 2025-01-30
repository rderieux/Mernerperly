import train from "../../assets/train.png";
import "./ReadingRail.css";

export default function ReadingRail() {
  return (
    <>
      <div className="rail">
        <p className="rail-name">READING RAILROAD</p>
        <img className="rail-image" src={train} alt="Train" />

        <p className="rail-price">$200</p>
      </div>
    </>
  );
}
