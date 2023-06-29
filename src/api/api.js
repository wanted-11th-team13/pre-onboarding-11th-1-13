import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: { 'Content-Type': 'application/json' },
});

export function validEmail(email) {
  return email.includes('@');
}

export function validPassword(password) {
  return password.length >= 8;
}

export function handleLogout() {
  localStorage.removeItem('accessToken');
}
