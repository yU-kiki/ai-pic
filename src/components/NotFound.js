import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 not found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <div>
        <Link to={`/`}>ホームへ戻る</Link>
      </div>
    </>
  );
}

export default NotFound;