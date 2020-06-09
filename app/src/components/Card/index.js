import React from 'react';
import PropTypes from 'prop-types';

import remove from '../../asserts/icon-remove.svg';
import { CardContent } from './style';

const Card = (props) => {
  const { vehicle, removeVehicle } = props;
  return (
    <CardContent>
      <div>
        <h3>Veículo</h3>
        <p>
          <span>Placa</span>
          {' '}
          {vehicle.plate}
        </p>
      </div>
      <button type="button" onClick={() => removeVehicle()}>
        <img src={remove} alt="remove" />
      </button>
    </CardContent>
  );
};

Card.propTypes = {
  vehicle: PropTypes.shape({
    plate: PropTypes.string,
  }).isRequired,
  removeVehicle: PropTypes.func.isRequired,
};
export default Card;
