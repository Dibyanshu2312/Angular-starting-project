import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-analytics-chart',
  imports: [CommonModule],
  templateUrl: './analytics-chart.html',
  styleUrl: './analytics-chart.css',
  standalone: true
})
export class AnalyticsChart {
 chartData = signal([
    { value: 60 }, { value: 80 }, { value: 45 }, 
    { value: 90 }, { value: 70 }, { value: 85 }, { value: 95 }
  ]);
  
  chartLabels = signal(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
}
