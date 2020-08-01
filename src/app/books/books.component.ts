import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import { BookService } from '../services/book.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books: Book[];
    columnsToDisplay: string[] = ['id', 'title', 'isbn'];

    // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private bookService: BookService) { }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(): void {
        // this.bookService.getBooks().subscribe(books => this.books = books);
        this.books = BOOKS;
    }

}
