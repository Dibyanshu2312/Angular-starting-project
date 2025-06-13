import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { QuickActions } from './quick-actions/quick-actions';
import { UserProfile } from './user-profile/user-profile';
import { CommonModule } from '@angular/common';
import { Form } from './form/form';
import { Switcher } from './switcher/switcher';
import { AnalyticsChart } from './analytics-chart/analytics-chart';
import { Eventbinding } from './eventbinding/eventbinding';
import { Demo } from './demo/demo';
import { FormsModule } from '@angular/forms';
import { Piping } from './piping/piping';
import { Dashboard } from './dashboard/dashboard';
import { Addproduct, Myservice } from './services/myservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './addproduct/addproduct';  

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Dashboard,
    CommonModule,
    RouterModule,
    AddProductComponent,
    FormsModule,
    HttpClientModule
],
  standalone:true,
  providers: [Myservice],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Modern Dashboard';
  name = '';

  childmsg: any;
  router: any;
  reciveMessage(msg: any) {
    console.log(msg);
    this.childmsg = msg;
  }
   navigateToAddProduct(): void {
    this.router.navigate(['/addproduct']);
  }
}
