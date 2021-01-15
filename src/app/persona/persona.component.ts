import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  public nombre: string;
  public apellido: string;
  public sexo: string;
  public edad: string;
  public persona: Persona;

  constructor() {
    this.persona = new Persona()
    this.nombre = this.persona.getNombre("Pablo");
    this.apellido = this.persona.getApellido("Atayde");
    this.sexo = this.persona.getSexo("Masculino");
    this.edad = this.persona.getEdad("22");
   }

  ngOnInit(): void {
  }

}
