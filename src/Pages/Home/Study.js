import React, { useState } from "react";

const study = [
  { name: "Study" },
  { name: "Quiz" },
  { name: "Test" },
  { name: "Game" },
  { name: "Other" },
];
const Study = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mb-5">
      <div className="flex justify-center gap-4 text-xl ">
        {study.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSetActive(index)}
            style={{ cursor: "pointer" }}
          >
            <h1
              style={{
                margin: "5px",
                textDecoration: activeIndex === index ? "underline" : "none",
                color: activeIndex === index ? "#051A91" : "inherit",
              }}
            >
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Study;
