const initialState = {
  isLoading: false,
  dataUser: [],
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        isLoading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        token: action.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        token: action.token,
      };
    case 'GET_USER':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataUser: action.data,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        isLoading: true,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        dataUser: action.data,
      };
    default:
      return state;
  }
};

export default auth;
