import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const storeRedux = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default storeRedux;
