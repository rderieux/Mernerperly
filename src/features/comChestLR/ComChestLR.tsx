import chestImage from "../../assets/chest.png";
import "./ComChestLR.css";

export default function ComChestLR() {
  return (
    <>
      <div className="com-chestlr">
        <div className="com-chestlr-name">COMMUNITY</div>
        <div className="chest-lr">
          <img src={chestImage} alt="Treasure Chest" />
        </div>
        <div className="com-chestlr-inst">INSTRUCTIONS</div>
      </div>
    </>
  );
}
