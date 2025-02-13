import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  ratones = [{
    codigo: 1,
    nombre: "Raton Generico",
    descripcion: "Raton generico"
  },{
    codigo: 2,
    nombre: "Raton RGB Azul",
    descripcion: "Raton con luces azules"
  },{
    codigo: 3,
    nombre: "Raton Rayitos",
    descripcion: "Raton con luces de rayitos"
  },{
    codigo: 4,
    nombre: "Raton Generico",
    descripcion: "Raton generico"
  },{
    codigo: 5,
    nombre: "Raton Logitec",
    descripcion: "Raton de marca Logitec"
  },{
    codigo: 6,
    nombre: "Raton Telefono",
    descripcion: "Raton para hacer llamadas"
  },{
    codigo: 7,
    nombre: "Raton Gamer Malo",
    descripcion: "Raton generico con luces"
  },{
    codigo: 8,
    nombre: "Raton Rayitos++",
    descripcion: "Raton Rayitos Blanco"
  },{
    codigo: 9,
    nombre: "Raton TT",
    descripcion: "Raton con carita llorando"
  },{
    codigo: 10,
    nombre: "Raton Rojo LGB",
    descripcion: "Raton que usaria un Sitd"
  }

  ];
}
