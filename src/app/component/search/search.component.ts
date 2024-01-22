import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresService } from '../../service/stores.service';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  famousStores:any;
  stores:any;
  storesService: StoresService =inject(StoresService);
  famousService: FamousStoresGeneralService =inject(FamousStoresGeneralService);
  searchResult: any[]=[];
  query: string = '';

  constructor(private router: Router,private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.storesService.getStores().subscribe((response) => {
      this.stores = response;
    });
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      if (this.query) {
        this.famousService.getFamousStoresGeneral().subscribe((response) => {
          this.famousStores = response;
          this.searchResult = this.famousStores.filter((store: { name: string , category:string}) =>
           store.name.toLowerCase().includes(this.query.toLowerCase())
            ||
            store.category.toLowerCase().includes(this.query.toLowerCase())
          );
          console.log(this.searchResult)
        });
      }
    });
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