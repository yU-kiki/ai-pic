import { React, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Camera } from "react-camera-pro";
import btnCancel from "../assets/img/btn_cancel.svg";
import btnCamera from "../assets/img/btn_camera.svg";
import btnGo from "../assets/img/btn_go.svg";

const TakePic = (props) => {
  const [isCaptureEnable, setCaptureEnable] = useState(true);
  const camera = useRef(null);
  const [url, setUrl] = useState(null);

  const takePhoto = useCallback(() => {
    const imageSrc = camera.current?.takePhoto();
    if (imageSrc) {
      setUrl(imageSrc);
      setCaptureEnable(false);
    }
  }, [camera])

  const maxCount = 4;

  return (
    <>
      {isCaptureEnable || (
        <>
          <div className="main-camera">
            <div className="btn-cancel">
              <img onClick={() => setCaptureEnable(true)} src={btnCancel} alt="" />
            </div>
            <div className="capture-img">
              <img className="camera-area" src={url} alt='' />
              <div className="generate-area" src="" alt="" />
              <p>{props.setUrl(url)}</p>
              <Link className="go-area" to={`/step2/?maxCount=${maxCount}&selectCount=0&selectAns=0`}>
                <p className="fs24 go-text">進める</p>
                <img className="btn-go" src={btnGo} alt="" />
              </Link>
            </div>
          </div>
        </>
      )}
      {isCaptureEnable && (
        <>
          <div className="main-camera">
            <div className="camera-area">
              <Camera ref={camera} facingMode='environment' aspectRatio={9 / 14} />
              <div className="generate-area" src="" alt="" />
            </div>
            <img className="btn-photo" src={btnCamera} alt="" onClick={takePhoto} />
          </div>
        </>
      )}
    </>
  );
}

export default TakePic;