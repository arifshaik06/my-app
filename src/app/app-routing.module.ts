import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent, children:[
    {path:"welcome", component:WelcomeComponent},
    {path:"home",component:HomeComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"circle",component:CircleComponent},
    {path:"bmi",component:BmiComponent},
    {path:"my-apps",component:MyAppsComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"pipes",component:PipesComponent},
    {path:"employees",component:EmployeesComponent},
    {path:"event",component:EventRegistrationComponent},
    {path:"cart",component:CartComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
