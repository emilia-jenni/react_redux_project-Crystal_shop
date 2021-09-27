import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeState } from "./store/actions";

import "./App.scss";

import Crystals from "./Pages/Crystals";
import Collections from "./Pages/Collections";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeState());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/crystals" component={Crystals} exact />
          <Route path="/collections" component={Collections} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
