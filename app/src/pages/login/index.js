import React, { Component } from "react"

import car from '../../asserts/car.svg'
import arrow from '../../asserts/icon-arrow.svg'
import api from '../../services/api'
import { login } from '../../services/auth'
import { Container, Button, Notification } from './style'

class Login extends Component {
  state = {
    email: '',
    password: '',
    erro: ''
  }

  handleSignIn = async (e) =>{
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Preencha os campos de email e senha." })
    } else {
      try {
        const { data } = await api.post("/auth", { email, password })
        login(data.data.token)
        this.props.history.push("/veiculos")
      } catch (error) {
        this.setState({
          error: "Email ou senha inválida"
        })
      }
    }
  }

  render(){
    return (
      <Container>
        <img src={car}/>
        <Notification error={!!this.state.error}>
          {
            !!this.state.error && <div>{this.state.error}</div>
          }
        </Notification>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value})} />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input id="password" type="password" value={this.state.password} onChange={ e => this.setState({ password: e.target.value})}/>
          </div>
        </form>
        <Button>
          <button onClick={this.handleSignIn}>
            <div>
              Login
              <img src={arrow}/>
            </div>
          </button>
        </Button>
      </Container>
    )
  }
}

export default Login
