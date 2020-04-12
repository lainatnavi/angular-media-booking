import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
// import { BOOKS } from '../mock-books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book = {
    id: 1,
    title: 'Le Avventure di Pizzicotta',
    isbn: '8888-0000-fer22221'
  };

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

}
