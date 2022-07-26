import axios from 'axios';
import { store } from '../_store/store';
import { authActions } from '../_store/users.slice';

const baseUrl = process.env.REACT_APP_API_URL;

export const axiosWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
};

function request(method) {
    return async (path, body) => {
        try {
            const response = await axios({
                method,
                url: new URL(path, baseUrl).href,
                data: body,
                headers: { ...authHeader() },
            });

            return response.data;
        } catch (err) {
            if (err.response.status === 403 && authToken()) {
                const logout = () => store.dispatch(authActions.logout());
                logout();
            } else if (err.response) {
                throw new Error(err.response.data);
            } else {
                throw err;
            }
        }
    };
}

function authHeader() {
    const token = authToken();
    const isLoggedIn = !!token;
    if (isLoggedIn) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

function authToken() {
    return store.getState().auth.user?.token;
}
