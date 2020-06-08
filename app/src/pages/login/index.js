import React, { Component } from "react"

import car from '../../asserts/car.svg'
import arrow from '../../asserts/icon-arrow.svg'
import api from '../../services/api'
import { login } from '../../services/auth'
import { Container, Content, Button } from './style'

// components
import Input from '../../components/Input'
import Notification from '../../components/Notification'

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

  handleInput = (e) => {
    const {name, value} = e.target
    console.log(value, e.target)
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <img src={car}  alt="carro" />

          <Notification text={this.state.error} />

          <h1>Login</h1>
          <form>
            <Input
              type="email"
              label="Email"
              id="email"
              value={this.state.email}
              handleInput={this.handleInput}
            />
            <Input
              type="password"
              label="Senha"
              id="password"
              value={this.state.password}
              handleInput={this.handleInput}
            />
          </form>
          <Button>
            <button onClick={this.handleSignIn}>
              <div>
                Login
                <img src={arrow} alt="seta" />
              </div>
            </button>
          </Button>
        </Content>

      </Container>
    )
  }
}

export default Login
