import lightBulb from "../../assets/light.png";
import "./ElectricCompany.css";

export default function ElectricCompany() {
  return (
    <>
      <div className="electric">
        <div className="electric-info">
          <p className="electric-name">ELECTRIC</p>
          <img className="electric-img" src={lightBulb} alt="Light Bulb" />
          <p>$150</p>
        </div>
      </div>
    </>
  );
}
