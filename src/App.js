import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsers } from "./actions/users";
import { getRounds } from "./actions/rounds";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import NewGameContainer from "./components/NewGameContainer";
import RoundsContainer from "./components/RoundsContainer";
import Footer from "./components/Footer";


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
          <Route path="/" element={Home} />
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/users/index" element={<UsersContainer />} />
          <Route path="/rounds/new" element={<NewGameContainer />} />     
          <Route path="/rounds/index" element={<RoundsContainer />} />
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