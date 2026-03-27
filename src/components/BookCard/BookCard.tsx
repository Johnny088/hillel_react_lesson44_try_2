import type { bookType } from '../../types/bookType';
interface Props {
  book: bookType;
}
export const BookCard = ({ book }: Props) => {
  return (
    <>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Published year: {book.year}</p>
    </>
  );
};
