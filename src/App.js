import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/reset.css'
import './assets/style/style.css'

import Home from "./components/Home";
import TakePic from "./components/TakePic";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Complete from "./components/Complete";
import NotFound from "./components/NotFound.js";

const App = () => {
  const [url, setUrl] = useState("");
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path={`*`} element={<NotFound />} />
          <Route path={`/`} element={<Home />} />
          <Route path={`/takepic/`} element={<TakePic setUrl={ setUrl } />} />
          <Route path={`/step2/`} element={<Step2 />} />
          <Route path={`/step3/`} element={<Step3 />} />
          <Route path={`/complete/`} element={<Complete url={ url } />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
