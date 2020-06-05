import { call, put, select } from 'redux-saga/effects'

import { Creators as vehiclesActions } from '../ducks/vehicles'

import api from '../../services/api'

export function* addVehicle(action) {
  try {
    const isDuplicated = yield select(state => state.vehicle.data.find(item => item.plate === action.payload.data))
    if (isDuplicated) {
      yield put(vehiclesActions.addMessageError('Esta placa já existe no sistema'))
    } else {
      yield call(api.post, 'vehicle', { plate: action.payload.data})
      yield put(vehiclesActions.addRequestSuccess('veículo adicionado com sucesso!'))
    }
  } catch (err) {
    yield put(vehiclesActions.addMessageError('Verifique o valor digitado ou tente novamente mais tarde'))
  }
}

export function* getVehicle() {
  try {
    const { data } = yield call(api.get, 'vehicle')
    yield put(vehiclesActions.getVehicleSuccess(data.data))
  } catch (err) {
    yield put(vehiclesActions.addRequestFailure('ocorreu um erro no sistema'))
  }
}

export function* removeVehicle(action){
  try {
    yield call(api.delete, `vehicle/${action.payload.id}`)
    yield put(vehiclesActions.addRequestSuccess('veículo foi removido'))
  }
  catch (err) {
    yield put(vehiclesActions.addRequestFailure('ocorreu um erro no sistema'))
  }
}

