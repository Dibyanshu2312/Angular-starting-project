import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,QuickActions,UserProfile,CommonModule,Form,Switcher,AnalyticsChart,Eventbinding,Demo,FormsModule,Piping],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title ='Modern Dashboard';
  name='';

  childmsg: any;
  reciveMessage(msg:any){
    console.log(msg);
    this.childmsg = msg;
  }
}
