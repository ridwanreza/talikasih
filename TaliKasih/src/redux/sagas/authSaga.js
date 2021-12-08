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
      return null;
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
    } else {
      return null;
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
      url: `https://api-talikasih.herokuapp.com/register`,
      data: action.data,
    });

    if (resRegister && resRegister.data) {
      yield storeToken(resRegister.data.token);
      yield put({type: 'REGISTER_SUCCESS', token: resRegister.data.token});
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'REGISTER_FAILED', error: err.response.data.errors});
  }
}

function* login(action) {
  try {
    console.log('START LOGIN');

    const resLogin = yield axios({
      method: 'POST',
      url: `https://api-talikasih.herokuapp.com/login`,
      data: action.data,
    });

    if (resLogin && resLogin.data) {
      yield storeToken(resLogin.data.token);
      yield put({type: 'LOGIN_SUCCESS', token: resLogin.data.token});
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'LOGIN_FAILED', error: err.response.data.message});
  }
}

function* logout(action) {
  try {
    const token = yield removeToken();
    if (token === null) {
      yield put({type: 'LOGOUT_SUCCESS', token: token});
      action.navigation.navigate('Main', {screen: 'Donate'});
    }
  } catch (err) {
    console.log(err);
  }
}

function* getTokenLatest() {
  try {
    const token = yield getToken();
    if (token !== null) {
      yield put({type: 'GET_TOKEN_SUCCESS', token: token});
      console.log('Get Token Successfully');
    } else if (token === null) {
      yield put({type: 'GET_TOKEN_NULL', token: token});
      console.log('Token null');
    }
  } catch (err) {
    console.log(err);
  }
}

function* getUser() {
  try {
    const token = yield getToken();

    const resUser = yield axios({
      method: 'GET',
      url: `https://api-talikasih.herokuapp.com/profile`,
      headers: {
        access_token: token,
      },
    });
    if (resUser && resUser.data) {
      yield put({type: 'GET_USER_SUCCESS', data: resUser.data.data});
    }
  } catch (err) {
    console.log(err);
  }
}

function* updateUser(action) {
  try {
    const token = yield getToken();

    const resUser = yield axios({
      method: 'PUT',
      url: `https://api-talikasih.herokuapp.com/profile/update`,
      headers: {
        access_token: token,
      },
      data: action.data,
    });
    if (resUser && resUser.data) {
      yield put({type: 'UPDATE_USER_SUCCESS', data: resUser.data.data});
      action.navigation.navigate('Main', {screen: 'My Account'});
      console.log(resUser.data.data);
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'UPDATE_USER_FAILED', error: err.response.data.errors});
  }
}

function* authSaga() {
  yield takeLatest('REGISTER', register);
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
  yield takeLatest('GET_USER', getUser);
  yield takeLatest('UPDATE_USER', updateUser);
  yield takeLatest('GET_TOKEN', getTokenLatest);
}

export default authSaga;
