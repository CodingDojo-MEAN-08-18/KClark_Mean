import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}