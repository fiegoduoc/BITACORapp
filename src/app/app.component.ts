import { Component } from '@angular/core';

interface Page {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: Page[] = [
    {
      title: 'Block de Notas',
      url: '/blocknotas',
      icon: 'C:\Users\fiter\Downloads\PROGRAMOVIL_E1\BITACORAPP\src\assets\icon\EDITAR.png'
    },
    {
      title: 'Notas de Voz',
      url: '/notasvoz',
      icon: 'C:\Users\fiter\Downloads\PROGRAMOVIL_E1\BITACORAPP\src\assets\icon\NOTA VOZ.png'
    },
    {
      title: 'Galería',
      url: '/galeria',
      icon: 'C:\Users\fiter\Downloads\PROGRAMOVIL_E1\BITACORAPP\src\assets\icon\FOTOS.JPG'
    },
    {
      title: 'Recordatorios',
      url: '/recordatorios',
      icon: 'C:\Users\fiter\Downloads\PROGRAMOVIL_E1\BITACORAPP\src\assets\icon\RECORDATORIOS.png'
    }
  ];
}