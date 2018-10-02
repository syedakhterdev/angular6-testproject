import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  category: string;
  id: number;
  constructor(private route: ActivatedRoute, private service: DataService) {
    this.route.params.subscribe(p => {
      this.category = p.category;
      this.id = p.id;
    });
  }

  ngOnInit() {
    this.service.get(this.category, this.id, data => {
      this.product = data;
    });
  }
}
