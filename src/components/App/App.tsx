import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BookList } from '../BookList/BookList';
import type { BookType } from '../../types/bookType';
import { deleteBook, fetchBooks } from '../../services/bookService';

export const App = () => {
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
  } = useQuery<BookType[]>({
    queryKey: ['books'],
    queryFn: fetchBooks,
    retry: 1,
  });
  const onDeleteBook = (id: BookType['id']) => {
    deleteBookMutation(id);
  };
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong, try later...</h2>}
      {!isLoading && books && books.length > 0 && (
        <BookList books={books} onDeleteBook={onDeleteBook} />
      )}
    </>
  );
};
