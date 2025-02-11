import train from "../../assets/train.png";
import "./ShortLine.css";

export default function ReadingRail() {
  return (
    <>
      <div className="short-line">
        <p className="short-line-name">SHORT</p>
        <img className="short-line-image" src={train} alt="Train" />
        <p className="short-line-price">$200</p>
      </div>
    </>
  );
}
