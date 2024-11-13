import { Routes } from '@angular/router';
import {MyFirstComponentComponent} from "./my-first-component/my-first-component.component";
import {MySecondComponentComponent} from "./my-second-component/my-second-component.component";

export const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' }, // default route
  { path: 'first', component: MyFirstComponentComponent },
  { path: 'second', component: MySecondComponentComponent },
];
