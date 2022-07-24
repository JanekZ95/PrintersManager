import axios from "axios";

export const signIn = async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/signIn`,
    user
  );

  return response.token;
};

export const signUp = async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/signUp`,
    user
  );

  return response.token;
};
