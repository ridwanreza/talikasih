import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
  try {
    await AsyncStorage.setItem('TOKEN', value);
    console.log('Token saved');
  } catch (err) {
    console.log(err);
  }
};

const removeToken = async () => {
  try {
    const value = await AsyncStorage.getItem('TOKEN');
    if (value !== null) {
      await AsyncStorage.removeItem('TOKEN');
      console.log('Token removed');
    }
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('TOKEN');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

function* register(action) {
  try {
    console.log('START REGISTER');

    const resRegister = yield axios({
      method: 'POST',
      url: `https://api-see-event-teamb.herokuapp.com/user/register`,
      data: action.data,
    });

    if (resRegister && resRegister.data) {
      yield put({type: 'REGISTER_SUCCESS'});
    }
  } catch (err) {
    console.log(err);
  }
}

function* login(action) {
  try {
    console.log('START LOGIN');

    const resLogin = yield axios({
      method: 'POST',
      url: `https://api-see-event-teamb.herokuapp.com/login`,
      data: action.data,
    });

    if (resLogin && resLogin.data) {
      yield storeToken(resLogin.data.token);
      yield put({type: 'LOGIN_SUCCESS', token: resLogin.data.token});
    }
  } catch (err) {
    console.log(err);
  }
}

function* logout() {
  try {
    yield removeToken();
    yield put({type: 'LOGOUT_SUCCESS', token: null});
  } catch (err) {
    console.log(err);
  }
}

function* getUser(action) {
  try {
    const token = yield getToken();

    const responseEvent = yield axios({
      method: 'GET',
      url: `https://api-see-event-teamb.herokuapp.com/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: action.data,
    });
    yield put({type: 'GET_USER_SUCCESS', data: responseEvent.data.data});
  } catch (err) {
    console.log(err);
  }
}

function* updateUser(action) {
  try {
    const token = yield getToken();

    const responseEvent = yield axios({
      method: 'PUT',
      url: `https://api-see-event-teamb.herokuapp.com/user/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: action.data,
    });
    yield put({type: 'UPDATE_USER_SUCCESS', data: responseEvent.data.data});
  } catch (err) {
    console.log(err);
  }
}

function* authSaga() {
  yield takeLatest('REGISTER', register);
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('GET_USER', getUser);
  yield takeLatest('UPDATE_USER', updateUser);
}

export default authSaga;
