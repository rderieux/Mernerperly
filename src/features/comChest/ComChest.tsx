import chestImage from "../../assets/chest.png";
import "./ComChest.css";

export default function ComChest() {
  return (
    <>
      <div className="com-chest">
        <div className="com-chest-name">COMMUNITY CHEST</div>
        <div className="chest">
          <img src={chestImage} alt="Treasure Chest" />
        </div>
      </div>
    </>
  );
}
