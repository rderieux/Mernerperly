import train from "../../assets/train.png";
import "./BAndORail.css";

export default function ReadingRail() {
  return (
    <>
      <div className="bo-rail">
        <p className="bo-rail-name">B & O</p>
        <img className="bo-rail-image" src={train} alt="Train" />
        <p className="bo-rail-price">$200</p>
      </div>
    </>
  );
}
