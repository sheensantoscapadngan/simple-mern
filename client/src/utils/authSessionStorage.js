export const setLoginToken = (token) => {
  sessionStorage.setItem('loginToken', token);
};

export const getLoginToken = () => {
  const loginToken = sessionStorage.getItem('loginToken');
  return loginToken;
};
