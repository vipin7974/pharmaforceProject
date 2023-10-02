import React from "react";
import Cubechart from "../Charts/Cubechart/Cubechart";
import { FiPieChart } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import "./Card.css";
const Card = ({ vh, h, m, l, cardtitle, vhc, hc, mc, lc, vs, hs, ms, ls }) => {
  return (
    <div className="cardmain">
      <div className="cardHeader">
        <h6>{cardtitle}</h6>
        <div className="switchchart">
          <FiPieChart class="swicthchart_pie" />
          <span class="swicthchart_center"></span>
          <HiOutlineSquares2X2 class="swicthchart_sq" />
        </div>
      </div>
      <div className="card_content">
        <div className="side_label">
          <div class="dot-label-container">
            <div class="dot very-high" style={vs}></div>
            <div class="label">Very High</div>
          </div>
          <div class="dot-label-container">
            <div class="dot high" style={hs}></div>
            <div class="label">High</div>
          </div>
          <div class="dot-label-container">
            <div class="dot medium" style={ms}></div>
            <div class="label">Medium</div>
          </div>
          <div class="dot-label-container">
            <div class="dot low" style={ls}></div>
            <div class="label">Low</div>
          </div>
        </div>
        <Cubechart
          vh={vh}
          h={h}
          m={m}
          l={l}
          vhc={vhc}
          hc={hc}
          mc={mc}
          lc={lc}
          vs={vs}
          hs={hs}
          ms={ms}
          ls={ls}
        />
      </div>
      <div className="d-flex">
        <div class="square" style={ms}></div>
        <span>1%</span>
      </div>
    </div>
  );
};

export default Card;
