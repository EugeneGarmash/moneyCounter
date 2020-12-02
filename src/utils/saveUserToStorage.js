export const checkUserLogin = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userIsAuthentificated = userData.email && userData.password; // BUT WE SHARE THE PASSWORD!!!
  return userIsAuthentificated ? true : false;
}

export const saveUserToStorage = userData => {
  localStorage.setItem('userData', JSON.stringify(userData))
}

export default saveUserToStorage;