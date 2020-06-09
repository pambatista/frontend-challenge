/**
 * REDUCERS
 */
const STATE_INITIAL = {
  data: [],
  error: '',
  message: '',
  msgErro: '',
};
export default function veiculos(state = STATE_INITIAL, action) {
  switch (action.type) {
    case 'GET_VEHICLE_SUCCESS':
      return { ...state, data: [...action.payload.data] };
    case 'ADD_REQUEST_SUCCESS':
      return { ...state, message: action.payload.message };
    case 'ADD_REQUEST_FAILURE':
      return { ...state, error: action.payload.error };
    case 'ADD_MESSAGE':
      return { ...state, msgErro: action.payload.message };
    case 'CLOSE_MODAL':
      return { ...state, msgErro: '' };
    default:
      return state;
  }
}
/**
 * ACTIONS
 */
export const Creators = {
  getVehicleRequest: () => ({
    type: 'GET_VEHICLE_REQUEST',
  }),

  getVehicleSuccess: (data) => ({
    type: 'GET_VEHICLE_SUCCESS',
    payload: { data },
  }),

  removeVehicleRequest: (id) => ({
    type: 'REMOVE_VEHICLE_REQUEST',
    payload: { id },
  }),

  addVehicleRequest: (data) => ({
    type: 'ADD_VEHICLE_REQUEST',
    payload: { data },
  }),

  addMessageError: (message) => ({
    type: 'ADD_MESSAGE',
    payload: { message },
  }),

  addRequestSuccess: (message) => ({
    type: 'ADD_REQUEST_SUCCESS',
    payload: { message },
  }),

  addRequestFailure: (error) => ({
    type: 'ADD_REQUEST_FAILURE',
    payload: { error },
  }),

  closeModalError: () => ({
    type: 'CLOSE_MODAL',
  }),

};
