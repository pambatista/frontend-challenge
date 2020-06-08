import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as VehicleAction} from '../../store/ducks/vehicles'
import { Container, Content } from './style'
import { logout } from '../../services/auth'


// components
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import List from '../../components/List'

class Vehicle extends Component {

  state = {
    plate: '',
    error: '',
    remove: false,
    id: ''
  }

  componentDidMount() {
    this.props.getVehicleRequest()
  }

  addNeWVehicle = async (e) => {
    e.preventDefault()
    const { plate } = this.state

    if (plate === '' || null) {
      this.setState({
        error: 'É necessario a placa do veículo para adicionar',
      })
    } else if (plate.length < 7 ) {
      this.setState({
        error: 'O valor da placa não é valido',
      })
    } else {
      const plate = this.state.plate.toUpperCase()
      this.props.addVehicleRequest(plate)
      this.props.getVehicleRequest()

      this.setState({
        plate: ''
      })
    }
  }

  closeModal = () => {
    this.setState({
      error: '',
      remove: false
    })
    this.props.closeModalError()
  }

  removeVehicle = async () => {
    this.props.removeVehicleRequest(this.state.id)
    this.props.getVehicleRequest()
    this.setState({
      error: '',
      remove: false,
      id: '',
    })
  }

  openModalRemoveVehicle = (vehicle) => {
    this.setState({
      error: `Deseja excluir o veiculo ${vehicle.plate} ? `,
      remove: true,
      id: vehicle.id
    })
  }

  logoutUser = () => {
    logout()
    this.props.history.push("/veiculos")
  }

  render(){
    return(
      <Container>
        <Content>
          <header>
            <div>
              <button onClick={this.logoutUser}>Sair</button>
            </div>
            <form>
              <div className="form-add">
                <p>Adicione um novo veículo</p>
                <Input
                  type="text"
                  id="placa"
                  value={this.state.plate}
                  handleInput={e => this.setState({plate: e.target.value.toUpperCase()})}
                  placeholder="Placa"
                />
                <button onClick={this.addNeWVehicle}>Adicionar</button>
              </div>
            </form>
          </header>
          <section>
            <List
              vahicles={this.props.vahicles.data}
              removeVehicle={this.openModalRemoveVehicle}
            />
          </section>
        </Content>
        <Modal
          text={this.state.error || this.props.vahicles.msgErro}
          closeModal={this.closeModal}
          remove={this.removeVehicle}
          btnRemove={this.state.remove}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  vahicles: state.vehicle,
});
const mapDispatchToProps = dispatch => bindActionCreators(VehicleAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(Vehicle);
