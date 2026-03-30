import type { BookType } from '../../types/bookType';
interface Props {
  book: BookType;
  onDeleteBook: (id: BookType['id']) => void;
}
export const BookCard = ({ book, onDeleteBook }: Props) => {
  return (
    <>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Published year: {book.year}</p>
      <button onClick={() => onDeleteBook(book.id)}>delete</button>
    </>
  );
};
