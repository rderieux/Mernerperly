import arrow from "../../assets/arrow.png";
import "./Start.css";

export default function Start() {
  return (
    <>
      <div className="start-container">
        <div className="start">
          <p>COLLECT</p>
          <p>$200.00 SALARY</p>
          <p>AS YOU PASS</p>
          <p className="go">GO</p>
        </div>
        <div className="arrow-container">
          <img src={arrow} className="arrow" alt="Red Arrow" />
        </div>
      </div>
    </>
  );
}
