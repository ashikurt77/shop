import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/Header.component";
import SignInAndOut from "./pages/SignInAndOut/SignInAndOut.component";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      const { history } = this.props;
      user ? history.push("/") : history.push("/signin");
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndOut} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
