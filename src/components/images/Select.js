import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import space1 from "../../assets/img/question/space-hotel.jpg";
import space2 from "../../assets/img/question/space-industrial.jpg";
import space3 from "../../assets/img/question/space-west.jpg";
import space4 from "../../assets/img/question/space-natural.jpg";
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

let step;
const SelectImgs = () => {
  let src1, src2, src3, src4;
  const [searchParams] = useSearchParams();
  const maxCount = Number(searchParams.get("maxCount"));
  const selectCount = Number(searchParams.get("selectCount"));
  const selectAns = Number(searchParams.get("selectAns"));
  step = selectCount + 1 === maxCount ? 3 : 2;
  if (selectCount === 0)
    src1 = subject1_1;
    src2 = subject1_2;
    src3 = subject1_3;
    src4 = subject1_4;
  if (selectCount === 1) {
    src1 = space1;
    src2 = space2;
    src3 = space3;
    src4 = space4;
  } else if (selectCount === 2) {
    src1 = subject2_1;
    src2 = subject2_2;
    src3 = subject2_3;
    src4 = subject2_4;
  } else if (selectCount === 3) {
    src1 = subject3_1;
    src2 = subject3_2;
    src3 = subject3_3;
    src4 = subject3_4;
  }
  return (
    <>
      <div className="select-imgs">
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 1}`} >
          <img src={src1} alt="画像１" />
        </Link>
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 2}`}>
          <img src={src2} alt="画像２" />
        </Link>
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 3}`}>
          <img src={src3} alt="画像３" />
        </Link>
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 4}`}>
          <img src={src4} alt="画像４" />
        </Link>
      </div>
    </>
  );
}

export default SelectImgs;
