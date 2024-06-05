import { Component, OnInit } from '@angular/core';

interface Recordatorio {
  texto: string;
  fecha: Date;
  urgencia: 'baja' | 'media' | 'alta';
}

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage implements OnInit {
  recordatorios: Recordatorio[] = [];
  nuevoRecordatorio: Recordatorio = { texto: '', fecha: new Date(), urgencia: 'baja' };

  constructor() { }

  ngOnInit() {
  }

  agregarRecordatorio() {
    this.recordatorios.push(this.nuevoRecordatorio);
    this.nuevoRecordatorio = { texto: '', fecha: new Date(), urgencia: 'baja' };
  }
}