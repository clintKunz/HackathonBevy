import axios from 'axios';

const { post, get, put } = axios;
axios.defaults.baseURL = 'http://localhost:5000/api';

export const login = async (email, password) => {
    return post('/users/login', { email, password })
    .then(response => response.data)
    .catch(err => err.response.data.message);
};

export const register = async (credentials) => {
    return post('/users/register', credentials)
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const getProfile = async () => {
    return get('/users/profile')
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const createLoan = async (loan) => {
    return post('/loans', loan)
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const updateLoan = async (loanId, changes) => {
    return put(`/loans/${loanId}`, changes)
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};