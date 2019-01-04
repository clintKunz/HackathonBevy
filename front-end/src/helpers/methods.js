import axios from 'axios';

const { post, get, put } = axios;
axios.defaults.baseURL = 'http://localhost:5000/api';

const config = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {'Authorization': "bearer " + token}
    };
}

export const login = (email, password) => {
    return post('/users/login', { email, password });
};

export const register = async (credentials) => {
    return post('/users/register', credentials);
};

export const getProfile = async () => {
    return get('/users/profile', config());
};

export const createLoan = async (loan) => {
    return post('/loans', loan, config());
};

export const updateLoan = async (loanId, changes) => {
    return put(`/loans/${loanId}`, changes, config());
};

export const searchLoans = async(type, string) => {
    return get(`/loans?type=${type}&string=${string}`);
};

export const getMyLoans = async() => {
    return get('/loans/mine', config());
}