import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/Header.component";
import SignInAndOut from "./pages/SignInAndOut/SignInAndOut.component";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndOut} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
