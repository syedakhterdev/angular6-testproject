import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { DataService } from '../services/data-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class SearchResultsComponent {
  searchResults: any = [];
  pageStart = 0;
  pageEnd = 8;
  category: string;
  currentPage = 1;
  totalResult: number;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DataService
  ) {
    this.route.params.subscribe(p => {
      this.category = p.category;
    });

    this.maxDate.setDate(this.maxDate.getDate() + 1);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  ngOnInit() {
    this.service.getAll(this.category, data => {
      this.searchResults = data;
      this.totalResult = data.length;
    });
  }

  onChangeSearchRange() {
    this.searchResults = [];
    let startDate = new Date(this.bsRangeValue[0].toISOString());
    let endDate = new Date(this.bsRangeValue[1].toISOString());
    this.service.getbyDateRange(startDate, endDate, this.category, data => {
      this.searchResults = data;
      this.totalResult = data.length;
    });
    this.currentPage = 1;
    this.pageStart = 0;
    this.pageEnd = 8;
  }

  getPage() {
    if (this.currentPage == 1) {
      this.pageStart = 0;
      this.pageEnd = 8;
    } else {
      this.pageStart = this.currentPage * 8 - 8;
      this.pageEnd = this.currentPage * 8;
    }
  }
}
