import { Component } from '@angular/core';

interface Audio {
  title: string;
  file: File;
  date: Date;
}

@Component({
  selector: 'app-notasvoz',
  templateUrl: './notasvoz.page.html',
  styleUrls: ['./notasvoz.page.scss'],
})
export class NotasvozPage {
  audioTitle = '';
  audios: Audio[] = [];

  uploadAudio() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*';
    fileInput.onchange = () => {
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file.size > 5 * 1024 * 1024) {
          alert('El archivo es demasiado grande. Tamaño máximo es 5MB.');
          return;
        }
        const audio: Audio = {
          title: this.audioTitle,
          file: file,
          date: new Date()
        };
        this.audios.push(audio);
        this.audios.sort((a, b) => b.date.getTime() - a.date.getTime());
        this.audioTitle = '';
      }
    };
    fileInput.click();
  }
}
