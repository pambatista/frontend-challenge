import React, { Component } from 'react';
import PropTypes from 'prop-types';

import car from '../../asserts/car.svg';
import arrow from '../../asserts/icon-arrow.svg';
import api from '../../services/api';
import { login } from '../../services/auth';
import { Container, Content, Button } from './style';

// components
import Input from '../../components/Input';
import Notification from '../../components/Notification';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    if (!email || !password) {
      this.setState({ error: 'Preencha os campos de email e senha.' });
    } else {
      try {
        const { data } = await api.post('/auth', { email, password });
        login(data.data.token);
        history.push('/veiculos');
      } catch (error) {
        this.setState({
          error: 'Email ou senha inválida',
        });
      }
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { error, email, password } = this.state;
    return (
      <Container>
        <Content>
          <img src={car} alt="carro" />

          <Notification text={error} />

          <h1>Login</h1>
          <form>
            <Input
              type="email"
              label="Email"
              id="email"
              value={email}
              handleInput={this.handleInput}
            />
            <Input
              type="password"
              label="Senha"
              id="password"
              value={password}
              handleInput={this.handleInput}
            />
          </form>
          <Button>
            <button type="button" onClick={this.handleSignIn}>
              <div>
                Login
                <img src={arrow} alt="seta" />
              </div>
            </button>
          </Button>
        </Content>

      </Container>
    );
  }
}

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default Login;
