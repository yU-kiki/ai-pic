import React from "react";
import { Link } from "react-router-dom";
import Modal3 from "./modal/Modal3";

const Step3 = () => {
  return (
    <>
      <Modal3 />
      <Link to={`/complete/`} className='btn btn-create'>
        <p>絵を作成する</p>
      </Link>
    </>
  );
}

export default Step3;
