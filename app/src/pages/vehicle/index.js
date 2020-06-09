/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as VehicleAction } from '../../store/ducks/vehicles';
import { Container, Content } from './style';
import { logout } from '../../services/auth';


// components
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import List from '../../components/List';

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plate: '',
      error: '',
      remove: false,
      id: '',
    };
  }

  componentDidMount() {
    this.props.getVehicleRequest();
  }

  addNeWVehicle = async (e) => {
    e.preventDefault();
    const { plate } = this.state;

    if (plate === '' || null) {
      this.setState({
        error: 'É necessario a placa do veículo para adicionar',
      });
    } else if (plate.length < 7) {
      this.setState({
        error: 'O valor da placa não é valido',
      });
    } else {
      const { plate } = this.state;
      this.props.addVehicleRequest(plate);
      this.props.getVehicleRequest();

      this.setState({
        plate: '',
      });
    }
  }

  closeModal = () => {
    this.setState({
      error: '',
      remove: false,
    });
    this.props.closeModalError();
  }

  removeVehicle = async () => {
    this.props.removeVehicleRequest(this.state.id);
    this.props.getVehicleRequest();
    this.setState({
      error: '',
      remove: false,
      id: '',
    });
  }

  openModalRemoveVehicle = (vehicle) => {
    this.setState({
      error: `Deseja excluir o veiculo ${vehicle.plate} ? `,
      remove: true,
      id: vehicle.id,
    });
  }

  logoutUser = () => {
    logout();
    this.props.history.push('/veiculos');
  }

  render() {
    const {
      plate, remove, error,
    } = this.state;
    const { vehicles } = this.props;
    return (
      <Container>
        <Content>
          <header>
            <div>
              <button type="button" onClick={this.logoutUser}>Sair</button>
            </div>
            <form>
              <div className="form-add">
                <p>Adicione um novo veículo</p>
                <Input
                  type="text"
                  id="placa"
                  value={plate}
                  handleInput={(e) => this.setState({ plate: e.target.value.toUpperCase() })}
                  placeholder="Placa"
                />
                <button type="button" onClick={this.addNeWVehicle}>Adicionar</button>
              </div>
            </form>
          </header>
          <section>
            <List
              vehicles={vehicles.data}
              removeVehicle={this.openModalRemoveVehicle}
            />
          </section>
        </Content>
        <Modal
          text={error || vehicles.msgErro}
          closeModal={this.closeModal}
          remove={this.removeVehicle}
          btnRemove={remove}
        />
      </Container>
    );
  }
}

Vehicle.propTypes = {
  vehicles: PropTypes.shape({
    msgErro: PropTypes.string,
    data: PropTypes.arrayOf({
      id: PropTypes.string,
      plate: PropTypes.string,
    }),
  }),
  getVehicleRequest: PropTypes.func.isRequired,
  addVehicleRequest: PropTypes.func.isRequired,
  closeModalError: PropTypes.func.isRequired,
  removeVehicleRequest: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  vehicles: state.vehicle,
});
const mapDispatchToProps = (dispatch) => bindActionCreators(VehicleAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
