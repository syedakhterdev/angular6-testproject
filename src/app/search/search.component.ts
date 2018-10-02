import { Component } from '@angular/core';
import { DataService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  searchCtrl: string;
  searchResults: any[];
  db: any[];

  constructor(private service: DataService, private router: Router) {
    service.getDb(data => {
      this.db = data;
    });
  }

  searchCateogry() {
    if (this.searchCtrl.length < 4) return;
    else {
      this.searchResults = [];
      this.searchResults = this.db.filter(
        o => o.category == this.searchCtrl.toLowerCase()
      );
    }
  }

  onSubmit() {
    let keyWord = this.searchCtrl.toLowerCase();
    this.router.navigate([`results/${keyWord}`]);
  }
}
