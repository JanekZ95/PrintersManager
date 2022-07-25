import { createSlice } from '@reduxjs/toolkit';
import { history } from '../_helpers/history';

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const authActions = slice.actions;
export const authReducer = slice.reducer;

function createInitialState() {
    return {
        user: JSON.parse(localStorage.getItem('user')),
        error: null,
    };
}

function createReducers() {
    return {
        register,
        login,
        logout,
        loginFullfilled,
        loginRejected,
    };

    function login(state) {
        state.error = null;
    }

    function register(state) {
        state.error = null;
    }

    function logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        history.navigate('/login');
    }

    function loginFullfilled(state, action) {
        const user = action.payload;

        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;

        const { from } = history.location.state || { from: { pathname: '/' } };
        history.navigate(from);
    }

    function loginRejected(state, action) {
        state.error = action.payload;
    }
}
