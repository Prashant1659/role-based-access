export const isLoggedIn = () => !!localStorage.getItem("token");
export const getRole = () => JSON.parse(atob(localStorage.getItem("token")?.split('.')[1] || 'null'))?.role;
