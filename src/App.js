import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import React from 'react';

export default () => {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

