import { Component, inject } from '@angular/core';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';
import { Title } from '@angular/platform-browser';
import { StoresInfosService } from '../../service/stores-infos.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StoresService } from '../../service/stores.service';

@Component({
  selector: 'app-famous-stores-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './famous-stores-general.component.html',
  styleUrl: './famous-stores-general.component.css'
})
export class FamousStoresGeneralComponent {
  famousStores:any;
  famousStoresGService: FamousStoresGeneralService =inject(FamousStoresGeneralService);
  stores:any;
  storeService: StoresService =inject(StoresService);
  hasLoadedFamous : boolean= false;
  router: Router =inject(Router);

  ngOnInit() {
    this.storeService.getStores().subscribe((response) => {
      this.stores = response;
    });
    this. famousStoresGService.getFamousStoresGeneral()
    .subscribe({
      next: response => {
        setTimeout(() =>{
          console.log(response);
          this.famousStores =response;
          this.hasLoadedFamous=true;
        },10);
      } 
    });
  }

  constructor(private titleService: Title) {
    titleService.setTitle("Famous Stores");
  }

  onViewStoreDetails(idClicked: number) {
    const foundStore = this.stores.find((store: any) => store.id === idClicked);
    console.log(foundStore);
    if (foundStore){
      this.router.navigate(["stores",idClicked]);
    }else{
      this.router.navigate(["menu-not-found"]);
    }
  }
}