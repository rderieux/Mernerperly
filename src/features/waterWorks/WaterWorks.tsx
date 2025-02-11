import waterSpout from "../../assets/spout.png";
import "./WaterWorks.css";

export default function WaterWorks() {
  return (
    <>
      <div className="water-works">
        <p className="water-works-name">WATER</p>
        <img className="water-works-img" src={waterSpout} alt="Water Spout" />
        <p>$150</p>
      </div>
    </>
  );
}
