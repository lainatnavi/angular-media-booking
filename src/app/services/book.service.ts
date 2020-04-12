import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private booksUrl = 'http://localhost:8080/books';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<GetBooksResponse>(this.booksUrl).pipe(
            map(response => response._embedded.bookList)
        );
    }
}

interface GetBooksResponse {
    _embedded: {
        bookList: Book[];
        _links: {self: {href: string}};
    };
}