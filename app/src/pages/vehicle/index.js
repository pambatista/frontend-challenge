import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as VehicleAction} from '../../store/ducks/vehicles'
import { Container, ButtonAdd, Card, List, Modal } from './style'
import { logout } from '../../services/auth'
import remove from '../../asserts/icon-remove.svg'
import close from '../../asserts/icon-close.svg'

class Vehicle extends Component {

  state = {
    plate: '',
    error: ''
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
    } else {
      this.props.addVehicleRequest(this.state.plate)
      this.props.getVehicleRequest()

      this.setState({
        plate: ''
      })
    }
  }

  closeModal = () => {
    this.setState({
      error: ''
    })
    this.props.closeModalError()
  }

  removeVehicle = async (id) => {
    this.props.removeVehicleRequest(id)
    this.props.getVehicleRequest()
  }

  logoutUser = () => {
    logout()
    this.props.history.push("/veiculos")
  }

  render(){
    return(
      <Container>
        <header>
          <div>
            <button onClick={this.logoutUser}>Sair</button>
          </div>
          <form>
            <p>Adicione um novo veículo</p>
            <div>
              <input placeholder="Placa" type="text" value={this.state.plate} onChange={e => this.setState({plate: e.target.value})}/>
            </div>
          </form>
          <ButtonAdd onClick={this.addNeWVehicle}>Adicionar</ButtonAdd>
        </header>

        <List>
          {
            this.props.vahicles.data.map((vehicle,index) => (
              <Card key={index}>
                <div>
                  <h3>Veículo</h3>
                  <p><span>Placa</span> {vehicle.plate}</p>
                </div>
                <button onClick={()=>this.removeVehicle(vehicle.id)}><img src={remove}/></button>
              </Card>
            ))
          }
        </List>
        {
          (!!this.state.error || !!this.props.vahicles.msgErro) && (
            <Modal>
              <div>
                <div>
                <button>
                  <img src={close} onClick={this.closeModal}/>
                </button>
                  <p>
                      {
                        !!this.state.error
                        ? this.state.error
                        : this.props.vahicles.msgErro
                      }
                    </p>
                </div>
              </div>
            </Modal>
          )
        }

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  vahicles: state.vehicle,
});
const mapDispatchToProps = dispatch => bindActionCreators(VehicleAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )(Vehicle);
