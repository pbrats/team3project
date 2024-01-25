import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { ReadOrderService } from '../service/read-order-history.service';
import { Router,} from '@angular/router';
import { Orders } from './../interfaces/orders';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
 standalone:  true,
 imports: [
  CommonModule,FormsModule, 
],
})
export class OrderHistoryComponent implements OnInit {
  [x: string]: any;
  service=inject(ReadOrderService);
  router: Router = inject(Router);
  orders: any[] = [];
  filteredOrders: any[] = [];
  totalOrders: number = 0;
  searchTerm: string = '';
  
  
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    
    this['http'].get<any[]>('order-history.json').subscribe((data: any[]) => {
      this.orders = data;
      this.filteredOrders = [...this.orders];
      this.totalOrders = this.orders.length;
    });
  }
  

  filterTable() {
    this.filteredOrders = this.orders.filter(order =>
      order.store.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      order.date.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      order.total.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

