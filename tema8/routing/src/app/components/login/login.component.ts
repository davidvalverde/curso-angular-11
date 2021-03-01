import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = ''; 
  pass: string = '';
  
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {}

  loginUser(event: any) {
    event.preventDefault();

    if (this.user === 'admin' && this.pass === 'admin') {
      this.auth.actualizarSesionIniciada(true);     
      this.router.navigate(['perfil']);  // Navegamos a una ruta llamada 'perfil'
    } else {
      this.auth.actualizarSesionIniciada(false);
    }
  }
}
