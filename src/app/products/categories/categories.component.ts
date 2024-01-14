import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../interfaces/product';
import { Store } from '../../interfaces/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  @Input() categories:string[]=[];

  ngOnInit() {

  }

  
 

}
