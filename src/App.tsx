// filepath: /G:/Projects/Mernerperly/src/App.tsx
import React from "react";
import Start from "./features/start/Start";
import MediAve from "./features/mediAve/MediAve";
import ComChest from "./features/comChest/ComChest";
import Baltic from "./features/baltic/Baltic";
import IncomeTax from "./features/incomeTax/IncomeTax";
import "./App.css";
import ReadingRail from "./features/readingRail/ReadingRail";
import OrientalAve from "./features/oriental/OrientalAve";
import Vermont from "./features/vermont/Vermont";
import Connecticut from "./features/connecticut/Connecticut";
import Chance from "./features/pinkChance/PinkChance";
import Jail from "./features/jail/Jail";
import StCharlesPlace from "./features/stCharlesPlace/StCharlesPlace";
import StatesAve from "./features/statesAve/StatesAve";
import VirginiaAve from "./features/virginiaAve/VirginiaAve";
import StJamesPlace from "./features/stJamesPlace/StJamesPlace";
import TennesseeAve from "./features/tennesseeAve/TennesseeAve";
import NewYorkAve from "./features/newYorkAve/NewYorkAve";
import KentuckyAve from "./features/kentuckyAve/KentuckyAve";
import ComChestLR from "./features/comChestLR/ComChestLR";
import ComChestRL from "./features/comChestRL/ComChestRL";
import IndianaAve from "./features/indianaAve/IndianaAve";
import IllinoisAve from "./features/illinoisAve/IllinoisAve";
import AtlanticAve from "./features/atlanticAve/AtlanticAve";
import VentnorAve from "./features/ventnorAve/VentnorAve";
import MarvinGardens from "./features/marvinGardens/MarvinGardens";
import PacificAve from "./features/pacificAve/PacificAve";
import NorthCarolinaAve from "./features/northCarolinaAve/NorthCarolinaAve";
import PennsAve from "./features/pennsAve/PennsAve";
import ParkPlace from "./features/parkPlace/ParkPlace";

function App() {
  return (
    <div className="container">
      <div className="board">
        <div className="cell corner">
          <Start />
        </div>
        <div className="cell top">
          <MediAve />
        </div>
        <div className="cell top">
          <ComChest />
        </div>
        <div className="cell top">
          <Baltic />
        </div>
        <div className="cell top">
          <IncomeTax />
        </div>
        <div className="cell top">
          <ReadingRail />
        </div>
        <div className="cell top">
          <OrientalAve />
        </div>
        <div className="cell top">
          <Chance />
        </div>
        <div className="cell top">
          <Vermont />
        </div>
        <div className="cell top">
          <Connecticut />
        </div>
        <div className="cell corner">
          <Jail />
        </div>
        <div className="cell right">
          <StCharlesPlace />
        </div>
        <div className="cell right">11</div>
        <div className="cell right">
          <StatesAve />
        </div>
        <div className="cell right">
          <VirginiaAve />
        </div>
        <div className="cell right">14</div>
        <div className="cell right">
          <StJamesPlace />
        </div>
        <div className="cell right">
          <ComChestLR />
        </div>
        <div className="cell right">
          <TennesseeAve />
        </div>
        <div className="cell right">
          <NewYorkAve />
        </div>
        <div className="cell corner">FREE PARKING</div>
        <div className="cell bottom">
          <KentuckyAve />
        </div>
        <div className="cell bottom">20</div>
        <div className="cell bottom">
          <IndianaAve />
        </div>
        <div className="cell bottom">
          <IllinoisAve />
        </div>
        <div className="cell bottom">23</div>
        <div className="cell bottom">
          <AtlanticAve />
        </div>
        <div className="cell bottom">25</div>
        <div className="cell bottom">
          <VentnorAve />
        </div>
        <div className="cell bottom">
          <MarvinGardens />
        </div>
        <div className="cell corner">GO TO JAIL</div>
        <div className="cell left">
          <PacificAve />
        </div>
        <div className="cell left">
          <NorthCarolinaAve />
        </div>
        <div className="cell left">
          <ComChestRL />
        </div>
        <div className="cell left">
          <PennsAve />
        </div>
        <div className="cell left">32</div>
        <div className="cell left">33</div>
        <div className="cell left">
          <ParkPlace />
        </div>
        <div className="cell left">35</div>
        <div className="cell left">36</div>
        <div className="cell center">CENTER</div>
      </div>
    </div>
  );
}

export default App;
