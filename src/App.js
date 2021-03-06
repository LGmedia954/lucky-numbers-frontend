import React from 'react';
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./actions/users";
import { getRounds } from "./actions/rounds";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import NewGameContainer from "./components/NewGameContainer";
import RoundsContainer from "./components/RoundsContainer";
import ResultsContainer from "./components/ResultsContainer";
import Footer from "./components/Footer";
import './index.css'


class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    // We say this.props.getUsers(); and not getUsers(); because we need to Connect the component.
    // Connect is a higher order component that maps state and actions from the store via props.
    // A higher-order component is a function that takes a component and returns a new component.
    // For this project I used the lifecycle method componentDidMount() to align with curriculum 
    // but could use function components with hooks and Redux Toolkit. Many recent updates.
    // With our fetch call from actions, componentDidMount populates local component state.
    this.props.getRounds();
  }
  render() {
    if (this.props.loading) {
      return <h3>Loading Users and Rounds...</h3>;
    }
// A React.Component class must have a render() method. It's the only Required method in a class component.
// When called, the render() function examines this.props and this.state and for this app, returns 2 arrays.

// componentDidMount method is called once, just after initial render, for current props and state
// creating new DOM elements, or setting up asynchronous functions.
// https://reactjs.org/docs/react-component.html

// The prop, this.props.loading is set by the parent component. The above check is good practice 
// if by chance there's a network error affecting data load, which would break our code.



    return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users/new" element={<UserForm/>} />
          <Route path="/users" element={<UsersContainer/>} />
          <Route path="/rounds/new" element={<NewGameContainer/>} />
          <Route path="/rounds" element={<RoundsContainer/>} />
          <Route path="/rounds/show" element={<ResultsContainer/>} />
        </Routes>
        <Footer/>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
  
  export default connect(mapStateToProps, { getUsers, getRounds })(App);



  // const mapStateToProps = (state) => {
  //   return {
  //     users: state.users,
  //     rounds: state.rounds
  //   };
  // };