import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { DiresctivesDemoComponent } from './diresctives-demo/diresctives-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataBindingDemoComponent,DiresctivesDemoComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_data_binding';
}
