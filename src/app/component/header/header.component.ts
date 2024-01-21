import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Publisher2Service } from '../../service/publisher2.service';
import { FamousStoresGeneralService } from '../../service/famous-stores-general.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  form!: FormGroup;
  router: Router =inject(Router);
  publisherService2 =inject(Publisher2Service);
  famousService: FamousStoresGeneralService =inject(FamousStoresGeneralService);
  stores: any;

  ngOnInit(){
    this.setFormValues();
  }
  setFormValues(){
    this.form= new FormGroup({
      searchData : new FormControl("")
    });
  }
  onSubmit(){
    console.log("auto")
    let wantedName=this.form.get("searchData")?.value
    console.log(wantedName);

    this.famousService.getFamousStoresGeneral().subscribe((response) => {
    this.stores=response;
    const searchResult = this.stores.filter((store: { name: string; }) =>
        store.name.toLowerCase().includes(wantedName.toLowerCase())
      );
      console.log(searchResult);
      this.publisherService2.publishData2(searchResult);
      this.router.navigate(['search']);
    });
    // console.log(this.form.get("searchData")?.value);
    // let wantedName=this.form.get("searchData")?.value;
    // this.publisherService2.publishData2(wantedName);
    // this.router.navigate(["search"]);
  }
}
