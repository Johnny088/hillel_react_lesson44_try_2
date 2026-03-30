import type { BookType } from '../../types/bookType';
import { BookCard } from '../BookCard/BookCard';

import css from './bookList.module.css';
interface Props {
  books: BookType[];
  onDeleteBook: (id: BookType['id']) => void;
}
export const BookList = ({ books, onDeleteBook }: Props) => {
  return (
    <ul className={css.container}>
      {books.map(book => (
        <li key={book.id} className={css.card}>
          <BookCard book={book} onDeleteBook={onDeleteBook} />
        </li>
      ))}
    </ul>
  );
};
