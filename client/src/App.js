import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import decode from 'jwt-decode'
import AuthForm from './components/AuthForm'
import ShowUserPlants from './components/ShowUserPlants'
import ShowUserPlant from './components/ShowPlant'
import { loginUser, registerUser, showUserPlants, createPlant } from './services/api-helper'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false,
      currentUser: null,
      authForm: {
        username: '',
        email: '',
        password: ''
      },
      formData: {
        name: "",
        description: "",
        size: "",
        light: "",
        water: "",
        humidity: "",
        image: "",
        user_id: ""
      },
      plants: []
    }
    this.handleAuthChange = this.handleAuthChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.getUserPlants = this.getUserPlants.bind(this)
    this.addPlant = this.addPlant.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  componentDidMount(){
    const token = localStorage.getItem("jwt")
    if (token) {
      const userData = decode(token)
      this.setState({
        currentUser: userData
      })
      this.getUserPlants(userData)
      console.log('user data: ', userData)
      this.addPlant()
    }
  }

  handleFormChange(e) {
    console.log("handlFormChange is working")
    const { name, value } = e.target;
    this.setState(prevState => (
      { 
        formData: { 
          ...prevState.formData,
          [name]: value 
      } 
    }
    ))
  }

  //===================Auth==========================

  handleAuthChange(e) {
    const { name, value } = e.target
    this.setState(prevState => (
      {
        authForm: {
          ...prevState.authForm,
          [name]: value
        }
      }
    ))
  }

  async handleRegister() {
    await registerUser(this.state.authForm)
    this.handleLogin()
  }

  async handleLogin() {
    console.log("handleLogin")
    console.log("authForm:", this.state.authForm)
    const userData = await loginUser(this.state.authForm);
    console.log("userData", userData)
    this.setState({
      currentUser: decode(userData.token),
    }, console.log("currentUser: ", this.state.currentUser))

    localStorage.setItem("jwt", userData.token)
  }

  handleLogout() {
    localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  //====================Calls for data===================

  async getUserPlants(data) {
    console.log("data", data)
    const user = await showUserPlants(data.user_id)
    this.setState({ plants: user.plants })
  }

  async addPlant() {
    console.log("this.state.formData", this.state.formData)
    const newPlant = await createPlant(this.state.formData)
    this.setState(prevState => ({
      plants: [...prevState.plants, newPlant],
      formData: {
        name: "",
        description: "",
        size: "",
        light: "",
        water: "",
        humidity: "",
        image: "",
        user_id: ""
      }
    }))
  }

  render() {
    console.log("currentUser", this.state.currentUser)
    console.log("plants", this.state.plants)
    return(
      <div className="App">
        <header className="header">
          <Link to="/">
            <div className="logo">Plant.ly</div>
          </Link>
          {this.state.currentUser
          ?
          <div className="logged-in">
            <p className="welcome">Hi {this.state.currentUser.username}</p>
            <button className="logout-button" onClick={this.handleLogout}>Logout</button>
          </div>
          :
          <button className="login-button" onClick={() => this.props.history.push('/login')}>Login</button>
          }
        </header>
        <Route path="/register" render={() => (
          <AuthForm
          authFormTitle="Register"
          handleSubmit={this.handleRegister}
          handleChange={this.handleAuthChange}
          authForm={this.state.authForm}
          />
        )} />
        <Route path="/login" render={() => (
          <AuthForm
          authFormTitle="Login"
          handleSubmit={this.handleLogin}
          handleChange={this.handleAuthChange}
          authForm={this.state.authForm}
          />
        )} />
        {this.state.currentUser &&  (
          <div>
            <Link to={`/users/${this.state.currentUser.user_id}`}>Plants</Link>
            <Route exact path={`/users/${this.state.currentUser.user_id}`} render={() => (
              <ShowUserPlants
                plants={this.state.plants}
                currentUser={this.state.currentUser}
                formData={this.state.formData}
                addPlant={this.addPlant}
                handleFormChange={this.handleFormChange}
              />
            )}/>
            <Route exact path={`/users/${this.state.currentUser.user_id}/plants/:name`} render={(props) => (
              <ShowUserPlant
                plants={this.state.plants}
                currentUser={this.state.currentUser}
                {...props}
              />
            )}/>
          </div>
          )}
      </div>
    )
  }
}

export default withRouter(App);
