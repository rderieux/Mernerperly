import jailPic from "../../assets/jail.png";
import "./Jail.css";

export default function Jail() {
  return (
    <>
      <div className="jail">
        <div className="jail-section">
          <div className="jail-sideways-text">JUST</div>
        </div>
        <div className="jail-section in-jail">
          <div className="jail-rotate">
            <p>IN</p>
            <img className="jailPic" src={jailPic} alt="Jail" />
            <p>JAIL</p>
          </div>
        </div>
        <div className="jail-section"></div>
        <div className="jail-section visit">VISITING</div>
      </div>
    </>
  );
}
