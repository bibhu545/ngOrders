import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private orders: Subject<any> = new Subject<any>();
  order$: Observable<any> = this.orders.asObservable();

  constructor(private http: HttpService) { }

  getOrders(): void {
    this.http.getData('localhost:3000/orders').subscribe({
      next: response => {
        this.orders.next(response);
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
