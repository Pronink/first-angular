import {Component, OnInit} from '@angular/core';
import {ApiUsuarioService} from '../service/api-usuario.service';
import {Usuario} from '../model/Usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  private listaUsuarios: Array<Usuario> = [];

  constructor(private apiUsuario: ApiUsuarioService) {
  }

  public getListaUsuarios() {
    this.apiUsuario.getUsuarios().subscribe((data: object) => {
      this.listaUsuarios = data['Usuarios'];
      console.log(data);
    });
  }

  ngOnInit() {
    this.getListaUsuarios();
  }

}
