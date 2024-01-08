import { Component, inject } from '@angular/core';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-famous-stores-general',
  standalone: true,
  imports: [],
  templateUrl: './famous-stores-general.component.html',
  styleUrl: './famous-stores-general.component.css'
})
export class FamousStoresGeneralComponent {
  famousStores:any;
  famousStoresGService: FamousStoresGeneralService =inject(FamousStoresGeneralService);

  ngOnInit() {
    this. famousStoresGService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        console.log(response);
        this.famousStores =response;
      } 
    });
  }
  constructor(private titleService: Title) {
    titleService.setTitle("Famous Stores");
}
}
