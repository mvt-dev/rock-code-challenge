import axios from 'axios';

export const getLikes = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_LIKE_API}/like/${process.env.REACT_APP_LIKE_APP}`);
  return data;
};

export const addLike = async () => {
  const { data } = await axios.put(`${process.env.REACT_APP_LIKE_API}/like/${process.env.REACT_APP_LIKE_APP}`);
  return data;
};