import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule para usar ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  // Método para manejar el envío
  enviarNombre() {
    console.log('Nombre introducido:', this.nombre);
    this.loginService.nombre = this.nombre;
    this.router.navigate(['/chat']);
  }
}
