import type { BookType } from '../../types/bookType';
import { BookCard } from '../BookCard/BookCard';

import css from './bookList.module.css';
interface Props {
  books: BookType[];
  ondeleteBook: (id: BookType['id']) => void;
}
export const BookList = ({ books, ondeleteBook }: Props) => {
  return (
    <ul className={css.container}>
      {books.map(book => (
        <li key={book.id} className={css.card}>
          <BookCard book={book} ondeleteBook={ondeleteBook} />
        </li>
      ))}
    </ul>
  );
};
