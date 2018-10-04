import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
