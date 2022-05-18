import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getUsers } from "./actions/users";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import NewGameContainer from "./components/NewGameContainer";
import GameRoundsContainer from "./components/GameRoundsContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {

    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/new" component={<UserForm />} />
          <Route path="/users" component={<UsersContainer />} />
          <Route path="/rounds/new" component={<NewGameContainer />} />
          <Route path="/rounds" component={<GameRoundsContainer />} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      users: state.users,
    };
  };
  
  export default connect(mapStateToProps, { getUsers })(App);