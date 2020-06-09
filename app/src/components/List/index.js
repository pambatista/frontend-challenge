import React from 'react';
import PropTypes from 'prop-types';

import { ListContent } from './style';

// components
import Card from '../Card';

const List = (props) => {
  const { vehicles } = props;
  return (
    <ListContent>
      {
        vehicles.map((vehicle) => (
          <Card
            key={vehicle.id}
            vehicle={vehicle}
            removeVehicle={() => props.removeVehicle(vehicle)}
          />
        )).reverse()
      }
    </ListContent>
  );
};

List.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      plate: PropTypes.string,
    }),
  ).isRequired,
  removeVehicle: PropTypes.func.isRequired,
};

export default List;
