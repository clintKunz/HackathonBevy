import axios from 'axios';

const { post, get, put } = axios;
axios.defaults.baseURL = 'http://localhost:5000/api';

export const login = (email, password) => {
    post('/users/login', { email, password })
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const register = (credentials) => {
    post('/users/register', credentials)
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const getProfile = () => {
    get('/users/profile')
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const createLoan = (loan) => {
    post('/loans', loan)
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};

export const updateLoan = (loanId, changes) => {
    put(`/loans/${loanId}`, changes)
    .then(response => response.data)
    .catch(err => alert(err.response.data.message));
};