import React from "react";
import ReactDOM from 'react-dom';
import { Home } from "./pages/index";
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  )
}

export default App;
