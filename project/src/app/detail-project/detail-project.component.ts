import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  // @ts-ignore
  id: number
  // @ts-ignore
  book: Book
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    // @ts-ignore
    this.book = new Book();
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    })
  }

}
