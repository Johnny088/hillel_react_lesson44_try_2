import axios from 'axios';
import type { bookType } from '../types/bookType';
const BaseUrl: string = 'https://6971cf4a32c6bacb12c49096.mockapi.io/books';
export const fetchBooks = async () => {
  const { data } = await axios.get<bookType[]>(BaseUrl);
  return data;
};

export const deleteBook = async (id: bookType['id']) => {
  const { data } = await axios.delete<bookType>(`${BaseUrl}/${id}`);
  return data;
};
