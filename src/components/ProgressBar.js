import React from "react";

const ProgressBar = (prop) => {
  if (prop.step === "1") {
    return (
      <>
        <div className="bar">
          <div className="bar-back"></div>
          <div className="bar-step-1"></div>
        </div>
      </>
    );
  } else if (prop.step === "2") {
    return (
      <>
        <div className="bar">
          <div className="bar-back"></div>
          <div className="bar-step-2"></div>
        </div>
      </>
    );
  } else if (prop.step === "3") { 
    return (
      <>
        <div className="bar">
          <div className="bar-back"></div>
          <div className="bar-step-3"></div>
        </div>
      </>
    );
  }
}

export default ProgressBar;