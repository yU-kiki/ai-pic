import React from "react";
import { useSearchParams } from "react-router-dom";

import redPic from "../../assets/img/red.png";
import bluePic from "../../assets/img/blue.png";
import greenPic from "../../assets/img/green.png";

import subject1_1 from "../../assets/img/question/subject-geometry-01.jpg";
import subject1_2 from "../../assets/img/question/subject-building-01.jpg";
import subject1_3 from "../../assets/img/question/subject-plant-01.jpg";
import subject1_4 from "../../assets/img/question/subject-animal-01.jpg";
import subject2_1 from "../../assets/img/question/subject-geometry-02.jpg";
import subject2_2 from "../../assets/img/question/subject-building-02.jpg";
import subject2_3 from "../../assets/img/question/subject-plant-02.jpg";
import subject2_4 from "../../assets/img/question/subject-animal-02.jpg";
import subject3_1 from "../../assets/img/question/subject-geometry-03.jpg";
import subject3_2 from "../../assets/img/question/subject-building-03.jpg";
import subject3_3 from "../../assets/img/question/subject-plant-03.jpg";
import subject3_4 from "../../assets/img/question/subject-animal-03.jpg";

const SelectImgs = () => {
  let src1, src2, src3;
  const [searchParams] = useSearchParams();
  const selectAns = Number(searchParams.get("selectAns"));
  const sel1 = parseInt(selectAns / 1000);
  const sel2 = parseInt(selectAns / 10) % 10 % 10;
  const sel3 = parseInt(selectAns) % 10 % 10 % 10;
  console.log(sel1, sel2, sel3);
  // src1 = `subject1_${sel1}`;
  // src2 = `subject2_${sel2}`;
  // src3 = `subject3_${sel3}`;
  return (
    <>
      <div className="selected-imgs">
        <img className="selected-img selected-img-1" src={subject1_4} alt="画像１" />
        <img className="selected-img selected-img-2" src={subject2_4} alt="画像２" />
        <img className="selected-img selected-img-3" src={subject3_3} alt="画像３" />
      </div>
    </>
  );
}

export default SelectImgs;