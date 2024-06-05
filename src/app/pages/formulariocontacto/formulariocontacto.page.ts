import { Component, OnInit } from '@angular/core';

interface Contacto {
  nombre: string;
  consulta: string;
}

@Component({
  selector: 'app-formulariocontacto',
  templateUrl: './formulariocontacto.page.html',
  styleUrls: ['./formulariocontacto.page.scss'],
})
export class FormularioContactoPage implements OnInit {
  contacto: Contacto = { nombre: '', consulta: '' };

  constructor() { }

  ngOnInit() {
  }

  enviarConsulta() {
    // PROVISORIO: Codigo para enviar consulta aun no implementado.
    alert('Gracias por ayudarnos a mejorar, leeremos tu consulta a la brevedad');
    this.contacto = { nombre: '', consulta: '' };
  }
}