import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
     <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/users/index" element={<UsersContainer />} />
          <Route path="/rounds/new" element={<NewGameContainer />} />
          <Route path="/rounds" element={<GameRoundsContainer />} />
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
    };
  };
  
  export default connect(mapStateToProps, { getUsers })(App);