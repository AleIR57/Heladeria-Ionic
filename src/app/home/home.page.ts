import { Component } from '@angular/core';
import { AlertController, ToastController} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController:AlertController, public toastController: ToastController) {}

  
  Nombre:string;
  Bolas:String;
  Sabores:string;
  Acompanante: string;
  Precio: string;
  Mensaje: string;
  contenidoMensaje: boolean = false;
  cono: boolean;
  vaso: boolean;

  getDatos(){
    this.Precio =  this.Bolas.substring(this.Bolas.indexOf("$") + 1);
    this.Bolas = this.Bolas.substring(0, this.Bolas.indexOf("$"));
    this.contenidoMensaje = true;
    console.log(this.cono);
    console.log(this.vaso);
    if(this.cono === true) {
      console.log(this.cono);
      this.Mensaje = "¡Hola, " + this.Nombre + "!, realizaste un pedido de " + this.Bolas + " en un cono" + ", además, escogiste los sabores " + this.Sabores + ", acompañado de " + this.Acompanante +  " . ¡Esperamos que lo disfrutes!" + ". Precio total a pagar: $" + this.Precio;
    }
    else if(this.vaso === true){
      this.Mensaje = "¡Hola, " + this.Nombre + "!, realizaste un pedido de " + this.Bolas + " en un vaso " + ", además, escogiste los sabores " + this.Sabores + ", acompañado de " + this.Acompanante +  " . ¡Esperamos que lo disfrutes!" + ". Precio total a pagar: $" + this.Precio;
    }
    
  }

  getLimpiar(){
    this.contenidoMensaje = false;
    this.presentToast();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: "info",
      subHeader: 'Estudiante',
      message: "Generar pedido",
      buttons:[{
        text: 'Cancelar',
        role: 'Cancelar',
        handler:(dato) =>{
          this.getLimpiar();
        }
        },{
            text: 'Ok',
            role: 'ok',
            handler: (datos) => {
              this.getDatos();
            }

      }]
    })
    await alert.present();
    await alert.onDidDismiss();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: "El mensaje fue borrado",
      duration: 2000
    })
    await toast.present();
  }




}
