import car from "../../assets/car.jpg";
import "./FreeParking.css";

export default function FreeParking() {
  return (
    <>
      <div className="parking">
        <div className="parking-info">
          <p className="parking-name">FREE</p>
          <img className="parking-car-img" src={car} alt="Car" />
          <p className="parking-name">PARKING</p>
        </div>
      </div>
    </>
  );
}
