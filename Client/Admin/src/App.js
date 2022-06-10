import GlobalStyles from "./globalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Movie from "./pages/Movie/Movie";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Other from "./pages/Others/Others";
import Cast from "./pages/Cast/Cast";
import Theater from "./pages/Theater/Theater";
import ViewMovies from "./pages/Movie/ViewMovie";
import EditMovie from "./pages/Movie/EditMovie";
import ShowTheaters from "./pages/Theater/ShowTheatres";
import EditTheatre from "./pages/Theater/EditTheatre";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/Movie" component={Movie} />
          <PrivateRoute path="/Other" component={Other} />
          <PrivateRoute path="/Cast" component={Cast} />
          <PrivateRoute path="/Theater" component={Theater} />
          <PrivateRoute path="/viewmovies" component={ViewMovies} />
          <PrivateRoute path="/EditMovie" component={EditMovie} />
          <PrivateRoute path="/ShowTheaters" component={ShowTheaters} />
          <PrivateRoute path="/EditTheatre" component={EditTheatre} />
          <PublicRoute path="/SignIn" component={SignIn} />
          <PublicRoute path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
