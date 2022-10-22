import React from "react";
import { Link } from "react-router-dom";
import SelectedImgs from "../images/Selected";
import ProgressBar from "../ProgressBar";
import backImg from "../../assets/img/back.svg";

const Modal3 = () => {
  return (
    <>
      <div className="modal modal-3">
        <div className="modal-header">
          <h3>Step3</h3>
          <ProgressBar step="3"/>
        </div>
        <div className="modal-content">
          <Link to={`/step2/`}>
            <img src={backImg} className="back-img" alt="" /> 
          </Link>
          <div className="explain">
            <h2>絵を生成する</h2>
            <p className="mt8 fs12">これらの画像が選ばれました</p>
          </div>
        </div>
        <SelectedImgs />
      </div>
    </>
  );
}

export default Modal3;
