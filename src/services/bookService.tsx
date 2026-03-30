import axios from 'axios';
import type { BookType } from '../types/bookType';
const baseUrl: string = 'https://6971cf4a32c6bacb12c49096.mockapi.io/books';
export const fetchBooks = async () => {
  const { data } = await axios.get<BookType[]>(baseUrl);
  return data;
};

export const deleteBook = async (id: BookType['id']) => {
  const { data } = await axios.delete<BookType>(`${baseUrl}/${id}`);
  return data;
};
