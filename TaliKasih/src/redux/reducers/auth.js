const initialState = {
  isLoading: false,
  dataUser: null,
  error: null,
  token: null,
  forgotToken: null,
  forLoading: false,
  resLoading: false,
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
        token: action.token,
        error: action.error,
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
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
        error: action.error,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        token: action.token,
      };
    case 'GET_TOKEN':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_TOKEN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        token: action.token,
      };
    case 'GET_TOKEN_NULL':
      return {
        ...state,
        isLoading: false,
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
        error: action.error,
      };
    case 'GET_USER_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
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
        error: action.error,
      };
    case 'UPDATE_USER_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'FORGOT_PASS_REQUEST':
      return {
        ...state,
        forLoading: true,
      };
    case 'FORGOT_PASS_REQUEST_SUCCESS':
      return {
        ...state,
        forLoading: false,
        forgotToken: action.forgotToken,
        error: action.error,
      };
    case 'FORGOT_PASS_REQUEST_FAILED':
      return {
        ...state,
        forLoading: false,
        error: action.error,
      };
    case 'RESET_PASS_REQUEST':
      return {
        ...state,
        resLoading: true,
      };
    case 'RESET_PASS_REQUEST_SUCCESS':
      return {
        ...state,
        resLoading: false,
        error: action.error,
      };
    case 'RESET_PASS_REQUEST_FAILED':
      return {
        ...state,
        resLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default auth;
