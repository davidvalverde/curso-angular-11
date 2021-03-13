import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  private url = 'http://jsonplaceholder.typicode.com/users';

  private usuario =
  {
    id: 11,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Imagina Formación',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }; 

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() { 
    this.usuarioService.url = this.url;
    this.usuarioService.getUsuarios()
        .subscribe(respuesta => console.log(respuesta));
    this.usuarioService.postUsuario(this.usuario)
        .subscribe(respuesta => console.log(respuesta));
    this.usuario.id = 1;
    this.usuarioService.putUsuario(this.usuario)
        .subscribe(respuesta => console.log(respuesta));
    this.usuarioService.deleteUsuario(1)
        .subscribe(respuesta => console.log(respuesta));
  }
}