import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  public isVisible: boolean = false;
  public logBook: number[] = [0];
  public count = 0;

  constructor() {}

  ngOnInit(): void {}

  showText() {
    this.count += 1;
    this.logBook.push(this.count);
    this.isVisible = this.isVisible ? false : true;
  }

  getClass(number: number) {
    return number > 4 ? 'text' : '';
  }
}
