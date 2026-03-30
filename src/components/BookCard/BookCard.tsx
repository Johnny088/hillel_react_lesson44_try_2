import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { BookType } from '../../types/bookType';
import { deleteBook } from '../../services/bookService';
interface Props {
  book: BookType;
  // onDeleteBook: (id: BookType['id']) => void;
}
export const BookCard = ({ book }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: deleteBookMutation } = useMutation({
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
  const onDeleteBook = (id: BookType['id']) => {
    deleteBookMutation(id);
  };
  return (
    <>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Published year: {book.year}</p>
      <button onClick={() => onDeleteBook(book.id)}>delete</button>
    </>
  );
};
