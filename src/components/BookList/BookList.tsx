import type { bookType } from '../../types/bookType';
import { BookCard } from '../BookCard/BookCard';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBooks, deleteBook } from '../../services/bookService';
import css from './bookList.module.css';

export const BookList = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBookMutation } = useMutation({
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery<bookType[]>({
    queryKey: ['books'],
    queryFn: fetchBooks,
    retry: 1,
  });
  const onDeleteBook = (id: bookType['id']) => {
    deleteBookMutation(id);
  };
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong, try later...</h2>}
      {!isLoading && books && books.length > 0 && (
        <ul className={css.container}>
          {books.map(book => (
            <li key={book.id} className={css.card}>
              <BookCard book={book} />
              <button onClick={() => onDeleteBook(book.id)}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
