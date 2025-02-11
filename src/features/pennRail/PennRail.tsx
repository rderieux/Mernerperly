import train from "../../assets/train.png";
import "./PennRail.css";

export default function ReadingRail() {
  return (
    <>
      <div className="penn-rail">
        <p className="penn-rail-name">PENNSYLVANIA</p>
        <img className="penn-rail-image" src={train} alt="Train" />
        <p className="penn-rail-price">$200</p>
      </div>
    </>
  );
}
