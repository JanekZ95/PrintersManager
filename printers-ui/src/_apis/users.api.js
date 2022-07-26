import { axiosWrapper } from '../_helpers/axios-wrapper';

export const Api = { signIn, signUp };

async function signIn({ username, password }) {
    return await axiosWrapper.post('/signIn', { username, password });
}

async function signUp({ username, password }) {
    return await axiosWrapper.post('/signUp', { username, password });
}
