import { all, takeLatest } from 'redux-saga/effects'

import { addVehicle, getVehicle, removeVehicle } from './Vehicle'

export default function* rootSaga(){
  yield all([
    takeLatest('ADD_VEHICLE_REQUEST', addVehicle),
    takeLatest('GET_VEHICLE_REQUEST', getVehicle),
    takeLatest('REMOVE_VEHICLE_REQUEST',  removeVehicle)
  ])
}
