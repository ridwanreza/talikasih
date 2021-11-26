import {all} from 'redux-saga/effects';
import authSaga from './authSaga';
import taliKasihSaga from './talikasihSaga';

export default function* rootSaga() {
  yield all([authSaga(), taliKasihSaga()]);
}
