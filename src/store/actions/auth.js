import * as actionTypes from './actionTypes';

let errorCodeMapper = {
    "EMAIL_NOT_FOUND": 'Email address not found !',
    "INVALID_PASSWORD": 'The entered password is invalid !',
    "USER_DISABLED": 'This user is disabled by the administrator !',
    "EMAIL_EXISTS": ' The email address is already in use by another account !',
    "MISSING_PASSWORD":  'Please provide a password !'
} 

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = (error) => {
  
    return {
        type: actionTypes.AUTH_FAIL,
        error: errorCodeMapper[error.message]
    }
}

export const logout = () => {
    // localStorage.removeItem('burger-token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');  
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT,
    }
}

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
  return {
      type: actionTypes.AUTH_CHECK_TIMEOUT,
      expirationTime: expirationTime
  }
}

export const auth = (email, pwd, isSignUp) => {
    return {
        type: actionTypes.AUTH_USER,
        email: email,
        pwd: pwd,
        isSignUp: isSignUp
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}