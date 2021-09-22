import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: any[] = [];

  constructor(private dashBoardService: DashboardService) { }

  ngOnInit(): void {
    this.dashBoardService.getOrders();
    this.dashBoardService.order$.subscribe(data => {
      if(data) {
        this.orders = data;
      }
    });
  }

}
