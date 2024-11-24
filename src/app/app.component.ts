import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faBars, faBook, faArrowRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'extensao';
  
}
