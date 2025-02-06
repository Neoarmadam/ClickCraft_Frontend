import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { MondongoComponent } from './mondongo/mondongo.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, RouterOutlet, MondongoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClickCraft_PaginaWeb';
}
