import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  
  Nombre:string;
  Bolas:String;
  Sabores:string;
  Acompanante: string;
  Precio: string;
  Mensaje: string;
  contenidoMensaje: boolean = false;

  getDatos(){
    this.Precio =  this.Bolas.substring(this.Bolas.indexOf("$") + 1);
    this.Bolas = this.Bolas.substring(0, this.Bolas.indexOf("$"));
    this.contenidoMensaje = true;

    this.Mensaje = "¡Hola, " + this.Nombre + "!, realizaste un pedido de " + this.Bolas + ", además, escogiste los sabores " + this.Sabores + ", acompañado de " + this.Acompanante +  " . ¡Esperamos que lo disfrutes!" + ". Precio total a pagar: $" + this.Precio;
  }


}
