// filepath: /G:/Projects/Mernerperly/src/App.tsx
import React from "react";
import Start from "./features/Start";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="board">
        <div className="cell corner">
          <Start />
        </div>
        <div className="cell top">1</div>
        <div className="cell top">2</div>
        <div className="cell top">3</div>
        <div className="cell top">4</div>
        <div className="cell top">5</div>
        <div className="cell top">6</div>
        <div className="cell top">7</div>
        <div className="cell top">8</div>
        <div className="cell top">9</div>
        <div className="cell corner">JAIL</div>
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
        <div className="center">Center</div>
      </div>
    </div>
  );
}

export default App;
