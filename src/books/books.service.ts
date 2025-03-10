import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<Book[]> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }

  getBook(bookID): Promise<Book> {
    const id = Number(bookID);

    return new Promise((resolve) => {
      const book = this.books.find((book) => book.id === id);
      if (!book) {
        throw new HttpException('Book does not exist', 404);
      }

      resolve(book);
    });
  }

  addBook(book): Promise<Book[]> {
    return new Promise((resolve) => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  deleteBook(bookId): Promise<Book[]> {
    const id = Number(bookId);

    return new Promise((resolve) => {
      console.log({ id });
      const index = this.books.findIndex((book) => book.id === id);

      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }

      this.books.splice(1, index);

      resolve(this.books);
    });
  }
}
