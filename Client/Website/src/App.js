import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Movies from "./Pages/Movies";
import SingleMovie from "./Pages/SingleMovie";
import MovieTheater from "./Pages/MovieTheater";
import TicketBooking from "./Pages/TicketBooking";
import TicketCard from "./Pages/TicketCard";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute path="/SignIn" component={SignIn} />
          <PublicRoute path="/SignUp" component={SignUp} />
          <PrivateRoute path="/Movies" component={Movies} />
          <PrivateRoute path="/SingleMovie" component={SingleMovie} />
          <PrivateRoute path="/MovieTheater" component={MovieTheater} />
          <PrivateRoute path="/TicketBooking" component={TicketBooking} />
          <PrivateRoute path="/TicketCard" component={TicketCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
