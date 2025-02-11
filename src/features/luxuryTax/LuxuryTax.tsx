import ring from "../../assets/ring.png";
import "./LuxuryTax.css";

export default function LuxuryTax() {
  return (
    <>
      <div className="luxury-tax">
        <p className="luxury-tax-name">LUXURY</p>
        <img className="luxury-tax-img" src={ring} alt="Ring" />
        <div className="luxury-tax-cost">
          <p className="luxury-tax-pay">PAY</p>
          <p>$75.00</p>
        </div>
      </div>
    </>
  );
}
