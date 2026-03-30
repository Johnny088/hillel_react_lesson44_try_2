import type { BookType } from '../../types/bookType';
interface Props {
  book: BookType;
  ondeleteBook: (id: BookType['id']) => void;
}
export const BookCard = ({ book, ondeleteBook }: Props) => {
  return (
    <>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Published year: {book.year}</p>
      <button onClick={() => ondeleteBook(book.id)}>delete</button>
    </>
  );
};
