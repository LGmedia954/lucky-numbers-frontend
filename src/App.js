import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsers } from "./actions/users";
import { getRounds } from "./actions/rounds";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import NewGameContainer from "./components/NewGameContainer";
import RoundsContainer from "./components/RoundsContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getRounds();
  }
  render() {
    return (
     <div className="App">
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
      </div>
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