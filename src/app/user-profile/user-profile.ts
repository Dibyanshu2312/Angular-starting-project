import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
  standalone: true
})
export class UserProfile {
  userName = signal('Dibyanshu sahoo');
  userRole = signal('Student Intern');
  
  userStats = signal([
    { label: 'Projects', value: '4' },
    { label: 'Tasks', value: '156' },
    { label: 'Success', value: '80%' }
  ]);

  activities = signal([
    { id: 1, text: 'Completed project review', time: '2 min ago' },
    { id: 2, text: 'Updated team dashboard', time: '1 hour ago' },
    { id: 3, text: 'Scheduled client meeting', time: '3 hours ago' }
  ]);
}
