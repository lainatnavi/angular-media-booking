import { Injectable } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

// register singleton bookService
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }
}
