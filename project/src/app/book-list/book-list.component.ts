import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // @ts-ignore
  books: Book[];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    // @ts-ignore
    this.bookService.getBookList().subscribe( data => {
      this.books = data;
    } )
  }

  updateBook(id: number) {
    this.router.navigate(['update-project', id]);

  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(data => {
      this.getBooks();
    })
  }

  bookDetails(id: number) {
    this.router.navigate(['detail-project', id]);
  }

}
