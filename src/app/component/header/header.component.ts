import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

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
  searchQuery: string = '';
  constructor(private route: ActivatedRoute){}
 
  ngOnInit(){
    this.setFormValues();
  }
  setFormValues(){
    this.form= new FormGroup({
      searchData : new FormControl("",[Validators.required])
    });
  }
  onSubmit(){
    this.searchQuery=this.form.get("searchData")?.value;
    console.log( this.searchQuery);
    this.router.navigate(['search'], { queryParams: { query: this.searchQuery } });
  }  
}