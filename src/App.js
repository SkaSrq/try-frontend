import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from "./layouts/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
