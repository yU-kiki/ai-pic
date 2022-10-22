import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import sample from "https://firebasestorage.googleapis.com/v0/b/aipic-365801.appspot.com/o/20221021233454_00001_a_black_and_white_paintting_of_vegetation_trees_realism_clear_outline.png?alt=media&token=9f3db9bb-14fe-4da3-8f7c-c7a6cf4c93cc";

const Complete = (props) => {
  // useEffect(() => {
  //   const data = async () => {
  //     const response = await fetch("http://3.113.209.61/api-rp");
  //     const data = await response.json();
  //     console.log(data);
  //     console.log("data")
  //     alert("hello");
  //     alert(data.totalItems);
  //   }
  //   data()
  // }, []);

  const [isGenerate, setGenerate] = useState(true);
  const [posts, setPosts] = useState([])

  const url = props.url;
  useEffect(() => {
    fetch('https://google.com', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data)
      })
  }, [])

  return (
    <>
      {isGenerate || (
        <>
          <div className="loader-area">
            <p>{posts}</p>
            <p className="fs24">generating...</p>
            <div class="loader">Loading...</div>
          </div>
        </>
      )}
      {isGenerate && (
        <>
          <img className="camera-area" src={url} alt="" />
          <img className="generate-area" src="" alt="" />
          {/* <img src={ sample } alt="" /> */}
          <Link onClick={() => setGenerate(false)} to={`/complete/`} className='btn btn-create'>
            <p>再作成する</p>
          </Link>
        </>
      )}
    </>
  );
}

export default Complete;
