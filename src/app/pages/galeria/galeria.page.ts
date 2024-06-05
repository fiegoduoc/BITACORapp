import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
})
export class GaleriaPage {
  images: string[] = [];

  constructor(public loadingController: LoadingController, public toastController: ToastController) {}

  async onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    if (file && file[0]) {
      const loading = await this.loadingController.create({
        message: 'Cargando imagen...',
      });
      await loading.present();

      const reader = new FileReader();
      reader.onload = e => {
        this.images.push(reader.result as string);
        loading.dismiss();
        this.presentToast();
      };
      reader.readAsDataURL(file[0]);
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Imagen subida!',
      duration: 2000
    });
    toast.present();
  }
}