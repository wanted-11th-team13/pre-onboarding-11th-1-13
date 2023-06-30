// ** axios interceptor **
// 요청 또는 응답이 전송되기 전 또는 후에 수행되는 중간 처리 함수
// 요청 헤더를 수정하거나 응답 데이터를 변활할 수 있다.

import axios from 'axios';
import { toast } from 'react-hot-toast';

const getAxiosInstance = () => {
  const config = {
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(config);

  instance.interceptors.request.use(
    request => {
      const access_token = localStorage.getItem('access_token');
      // 요청을 보내기 전에 localStorage에서 'access_token'이 있다면
      if (access_token)
        // 요청 헤더에 'Authorization' 헤더로 추가
        request.headers.Authorization = `Bearer ${access_token}`;
      return request;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = getAxiosInstance();

// api 함수 간소화
export const apiRequest = async (url, method, data) => {
  try {
    const response = await axiosInstance.request({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    toast(error.response.data.message);
  }
};
