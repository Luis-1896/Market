import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
//All routes from directory
{path:'',component:HomeComponent, data:{index:0}},
{path:'login',component:LoginComponent, data:{index:1}},
{path:'signup',component:SignupComponent, data:{index:2}},
{path:'cart',component:CartComponent, canActivate:[AuthGuard], data:{index:1}},
{path:'admin',component:GoodsComponent, canActivate:[AuthGuard], data:{index:2}},
{path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
