import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diresctives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diresctives-demo.component.html',
  styleUrl: './diresctives-demo.component.css'
})
export class DiresctivesDemoComponent {
  isHighlighted = true;
  isLoggedIn = true;
  condition = true;
  fruits = ['Apples','Oranges','Grapes'];
  color = 'red';
}
