import { createComponent, createPlatformFactory, NgModule } from '@angular/core';
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
import { FlipkarComponent } from './flipkar/flipkar.component';
import { DataofempComponent } from './dataofemp/dataofemp.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailsComponent } from './mails/mails.component';
import { MemeComponent } from './meme/meme.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentsComponent } from './students/students.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';




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
    {path:"cart",component:CartComponent},
    {path:"flipkart",component:FlipkarComponent},
    {path:"dataofemp",component:DataofempComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"bankaccounts",component:BankaccountsComponent},
    {path:"myntra",component:MyntraComponent},
    {path:"mails",component:MailsComponent},
    {path:"meme", component:MemeComponent},
    {path:"create-vehicle",component:CreateVehicleComponent},
    {path:"create-bank", component:CreateBankComponent},
    {path:"students",component:StudentsComponent},
    {path:"vehicle-details/:id",component:VehicleDetailsComponent}
    
  
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
