import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router';
import { DemoComponent } from './demo/demo.component';

import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';

import { RegisterComponent } from './auth/register/register.component';

const routes: Routes= [
 {path: '', component:DemoComponent},

{path:'cart',component:CartComponent },

{path:'login', component:LoginComponent},

{path:'register', component:RegisterComponent},

]; 


@NgModule({

    imports : [RouterModule.forRoot(routes),CommonModule],

    exports: [RouterModule] ,
})

export class AppRoutingModule{}
