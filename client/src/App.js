import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import decode from 'jwt-decode'
import AuthForm from './components/AuthForm'
import { loginUser, registerUser } from './services/api-helper'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null,
      authForm: {
        username: '',
        email: '',
        password: ''
      },
      formData: {
        name: ""
      }
    }
    this.handleAuthChange = this.handleAuthChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount(){
    const token = localStorage.getItem("jwt")
    if (token) {
      const userData = decode(token)
      this.setState({
        currentUser: userData
      })
    }
  }

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
      currentUser: decode(userData.token)
    }, console.log("currentUser: ", this.state.currentUser))

    localStorage.setItem("jwt", userData.token)
  }

  handleLogout() {
    localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render() {
    return(
      <div className="App">
        <header>
          <Link to="/">
            <h1>Plant.ly</h1>
          </Link>
          {this.state.currentUser
          ?
          <div>
            <p>Hi {this.state.currentUser.email}</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          :
          <button onClick={() => this.props.history.push('/login')}>Login/Register</button>
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
      </div>
    )
  }
}

export default withRouter(App);
