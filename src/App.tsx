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
import Chance from "./features/chance/Chance";
import Jail from "./features/jail/Jail";

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
        <div className="cell right">10</div>
        <div className="cell right">11</div>
        <div className="cell right">12</div>
        <div className="cell right">13</div>
        <div className="cell right">14</div>
        <div className="cell right">15</div>
        <div className="cell right">16</div>
        <div className="cell right">17</div>
        <div className="cell right">18</div>
        <div className="cell corner">FREE PARKING</div>
        <div className="cell bottom">19</div>
        <div className="cell bottom">20</div>
        <div className="cell bottom">21</div>
        <div className="cell bottom">22</div>
        <div className="cell bottom">23</div>
        <div className="cell bottom">24</div>
        <div className="cell bottom">25</div>
        <div className="cell bottom">26</div>
        <div className="cell bottom">27</div>
        <div className="cell corner">GO TO JAIL</div>
        <div className="cell left">28</div>
        <div className="cell left">29</div>
        <div className="cell left">30</div>
        <div className="cell left">31</div>
        <div className="cell left">32</div>
        <div className="cell left">33</div>
        <div className="cell left">34</div>
        <div className="cell left">35</div>
        <div className="cell left">36</div>
        <div className="cell center">CENTER</div>
      </div>
    </div>
  );
}

export default App;
