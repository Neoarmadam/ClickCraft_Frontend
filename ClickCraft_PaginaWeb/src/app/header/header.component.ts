import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Accede al archivo seleccionado
    if (file) {
      console.log('Archivo seleccionado:', file.name);
    }
  }
}
