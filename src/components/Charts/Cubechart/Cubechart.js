import React, { useState, useEffect } from "react";
import "./Cubechart.css";

const Cubechart = ({ vh, h, m, l, vhc, hc, mc, lc, vs, hs, ms, ls }) => {
  const [levels] = useState({
    veryHigh: vh,
    high: h,
    medium: m,
    low: l,
  });

  const [gridData, setGridData] = useState(
    Array(10).fill(Array(10).fill("yellow"))
  );

  useEffect(() => {
    updateGridColors(levels);
  }, [levels]);

  const updateGridColors = (newLevels) => {
    const newColors = Array(10)
      .fill(null)
      .map(() => Array(10).fill("yellow"));

    for (let level in newLevels) {
      let cubesToFill = newLevels[level];
      let rowIndex = 0;
      let colIndex = 9;

      while (cubesToFill > 0 && rowIndex < 10) {
        if (newColors[rowIndex][colIndex] === "yellow") {
          newColors[rowIndex][colIndex] = getLevelColor(level);
          cubesToFill--;
        }

        if (colIndex === 0) {
          colIndex = 9;
          rowIndex++;
        } else {
          colIndex--;
        }
      }
    }

    setGridData(newColors);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "low":
        return lc;
      case "medium":
        return mc;
      case "high":
        return hc;
      case "veryHigh":
        return vhc;
      default:
        return "yellow";
    }
  };

  return (
    <div className="Cubechart">
      <div className="grid-container">
        {gridData.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((color, colIndex) => (
              <div
                key={colIndex}
                className="grid-cell"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="level-labels">
        {Object.entries(levels).map(([level, value]) =>
          value > 0 ? (
            <div key={level} className="level-label">
              {value}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Cubechart;
