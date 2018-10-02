import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //get all products of same category

  getDb(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/mock-data/data.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  getAll(categroy, cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/mock-data/data.json`);

    req.onload = () => {
      let data = JSON.parse(req.response).filter(
        item => item.category == categroy
      );
      cb(data);
    };

    req.send();
  }

  //get single product

  get(category, id, cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/mock-data/data.json`);

    req.onload = () => {
      let data = JSON.parse(req.response).filter(
        item => item.category == category && item.id == id
      );
      cb(data);
    };

    req.send();
  }

  //get products between selected date range

  getbyDateRange(startDate, endDate, category, cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/mock-data/data.json`);

    req.onload = () => {
      let data = JSON.parse(req.response).filter(item => {
        let d = new Date(item.date);
        if (
          moment(d).isAfter(moment(startDate)) &&
          moment(d).isBefore(moment(endDate)) &&
          item.category == category
        )
          return item;
      });
      cb(data);
    };

    req.send();
  }
}
