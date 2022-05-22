import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import { getUsers } from "./actions/users";
import { getRounds } from "./actions/rounds";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import NewGameContainer from "./components/NewGameContainer";
import RoundsContainer from "./components/RoundsContainer";
import Footer from "./components/Footer";
import './index.css'


class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getRounds();
  }
  render() {
    if (this.props.loading) {
      return <h3>Loading Users and Rounds...</h3>;
    }

    return (
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/rounds/new" element={<NewGameContainer />} />
          <Route path="/rounds" element={<RoundsContainer />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      users: state.users,
      rounds: state.rounds
    };
  };
  
  export default connect(mapStateToProps, { getUsers, getRounds })(App);