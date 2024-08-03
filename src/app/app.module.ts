import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailsComponent } from './mails/mails.component';
import { MemeComponent } from './meme/meme.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentsComponent } from './students/students.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsinfoComponent } from './studentsinfo/studentsinfo.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { UserComponent } from './user/user.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { OperationsComponent } from './operations/operations.component';
import { RatingComponent } from './rating/rating.component';
import { AboutUsModule } from './about-us/about-us.module';
import { SiblingCommunicationComponent } from './sibling-communication/sibling-communication.component';
import { SiblingItemsComponent } from './sibling-items/sibling-items.component';
import { SiblingNavigationComponent } from './sibling-navigation/sibling-navigation.component';
import { SiblingCartComponent } from './sibling-cart/sibling-cart.component';
import { SiblingDiscountComponent } from './sibling-discount/sibling-discount.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    MyAppsComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeesComponent,
    EventRegistrationComponent,
    CartComponent,
    FlipkarComponent,
    DataofempComponent,
    VehicleComponent,
    BankaccountsComponent,
    MyntraComponent,
    MailsComponent,
    MemeComponent,
    CreateVehicleComponent,
    CreateBankComponent,
    StudentsComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    StudentsinfoComponent,
    BankDetailsComponent,
    UserComponent,
    CapitalDirective,
    PricePipe,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    Calculator2Component,
    OperationsComponent,
    RatingComponent,
    SiblingCommunicationComponent,
    SiblingItemsComponent,
    SiblingNavigationComponent,
    SiblingCartComponent,
    SiblingDiscountComponent,
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
