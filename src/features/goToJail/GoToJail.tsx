import policeMan from "../../assets/goToJail.png";
import "./GoToJail.css";

export default function GoToJail() {
  return (
    <>
      <div className="go-to-jail">
        <div className="go-to-jail-info">
          <p className="go-to-jail-name">GO TO</p>
          <img className="go-to-jail-img" src={policeMan} alt="Police Man" />
          <p className="go-to-jail-name">JAIL</p>
        </div>
      </div>
    </>
  );
}
