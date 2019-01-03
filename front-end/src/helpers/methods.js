import axios from 'axios';

const { post, get, put } = axios;
axios.defaults.baseURL = 'http://localhost:5000/api';

export const login = (email, password) => {
    return post('/users/login', { email, password })
};

export const register = async (credentials) => {
    return post('/users/register', credentials)
};

export const getProfile = async () => {
    return get('/users/profile')
};

export const createLoan = async (loan) => {
    return post('/loans', loan)
};

export const updateLoan = async (loanId, changes) => {
    return put(`/loans/${loanId}`, changes)
};

export const getLoans = async() => {
    return get('/loans');
};