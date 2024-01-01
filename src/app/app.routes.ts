import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { Error404Component } from './error404/error404.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllStoresComponent } from './all-stores/all-stores.component';
import { ProductsComponent } from './products/products.component';
import { StoreDetailsComponent } from './all-stores/store-details/store-details.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "users", component: AllUsersComponent},
    {path: "users/:id", component: UserDetailsComponent},
    {path: "stores", component: AllStoresComponent},
    {path: "stores/:id", component: StoreDetailsComponent},
    {path: "**", component: Error404Component}
];