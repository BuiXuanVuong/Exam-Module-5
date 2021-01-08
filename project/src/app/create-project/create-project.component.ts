import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  // @ts-ignore
  book: Book = new Book();
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.saveBook();
  }

  saveBook() {
    this.bookService.createBook(this.book).subscribe(data => {
      this.goToBookList();
    },
    error => console.log(error))
  }

  goToBookList() {
    this.router.navigate(['books']);
  }

}
