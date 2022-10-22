import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import iconCamera from "../../assets/img/icon_camera.svg";

const Modal1 = () => {
  return (
    <>
      <div className="modal modal-1">
        <h3>Step1</h3>
        <ProgressBar step="1" />
        <div className="explain mt32">
          <h2>部屋の写真を撮る</h2>
          <p className="mt8 fs12">飾りたい場所を引き目で撮影してください</p>
        </div>
        <div className="btn btn-camera mt24">
          <img src={iconCamera} alt="camera icon" className="icon-camera" />
          <Link to={`/takepic/`}>
            <p className="fs16">画像のアップロード</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Modal1;
