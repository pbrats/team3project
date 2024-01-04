import { Component, inject } from '@angular/core';
import { StoresService } from '../../service/stores.service';

@Component({
  selector: 'app-all-stores',
  standalone: true,
  imports: [],
  templateUrl: './all-stores.component.html',
  styleUrl: './all-stores.component.css'
})
export class AllStoresComponent {
  stores:any;
  storesService: StoresService =inject(StoresService);

  ngOnInit() {
    this.storesService.getStores()
    .subscribe({
      next: response => {
        console.log(response);
        this.stores =response;
      } 
    });
  }
}
