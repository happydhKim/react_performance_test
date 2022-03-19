import apiService from './services';

const getFirst = async () => {
  const response = await apiService.get('/first');
  return response.data;
};

const getSecond = async (depth: number) => {
  const response = await apiService.get(`/second?depth=${depth}`);
  return response.data;
};

const getThird = async (depth: number) => {
  const response = await apiService.get(`/third?depth=${depth}`);
  return response.data;
};

const getFourth = async (depth: number) => {
  const response = await apiService.get(`/fourth?depth=${depth}`);
  return response.data;
};

export {
  getFirst,
  getSecond,
  getThird,
  getFourth,
};
