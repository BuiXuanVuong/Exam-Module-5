import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  // @ts-ignore
  id: number;
  // @ts-ignore
  book: Book = new Book();
  constructor(private booService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`]
    this.booService.getBookById(this.id).subscribe(data => {
      this.book = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.booService.updateBook(this.id, this.book).subscribe(data => {
      this.goToBookList();
    },
      error => console.log(error));
  }

  goToBookList() {
    this.router.navigate([`/books`]);
  }

}
