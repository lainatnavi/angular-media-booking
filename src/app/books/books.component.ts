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

    books: Book[];

    constructor(
        private bookService: BookService) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => this.books = books);
    }

}
