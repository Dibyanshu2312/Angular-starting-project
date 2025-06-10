import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.css',
  standalone: true
})
export class QuickActions {
actions = signal([
    { id: 'project', title: 'New Project', icon: '📊', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { id: 'team', title: 'Add Team', icon: '👥', color: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)' },
    { id: 'report', title: 'Generate Report', icon: '📋', color: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' },
    { id: 'settings', title: 'Settings', icon: '⚙️', color: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)' }
  ]);

  recentActions = signal([
    { id: 1, action: 'Created new project', time: '2 min ago', status: 'completed' },
    { id: 2, action: 'Generated report', time: '1 hour ago', status: 'completed' },
    { id: 3, action: 'Team sync pending', time: '3 hours ago', status: 'pending' }
  ]);

  handleAction(actionId: string) {
    console.log(`Action clicked: ${actionId}`);
  }


  
}
