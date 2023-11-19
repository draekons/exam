import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      const newData = this.getNewData(); 
      this.items = this.items.concat(newData);
    }, 1000);
  }

  private getNewData() {
    const newData = [];
    for (let i = 0; i < 5; i++) {
      newData.push(null);
    }
    return newData;
  }

}
