import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  brand: string;

  ngOnInit() {
    this.brand = this.route.snapshot.params['brand'];
  }
}
