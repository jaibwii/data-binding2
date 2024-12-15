import { Component } from '@angular/core';
import { DataBindingDemoComponent } from "../../data-binding-demo/data-binding-demo.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = "Jb Reyes"
  description = "You may now use our applications in this website."

  textColor='blue';
  textColor2='red';
  textColor3='yellow';

  myStory = "";

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  devices = ['Smartwatch','Games console','Smart home device'];
}
