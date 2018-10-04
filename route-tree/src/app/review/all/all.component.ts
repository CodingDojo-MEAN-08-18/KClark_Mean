import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }
}
