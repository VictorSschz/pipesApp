import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //in18Select Pipe
  public name: string = 'Víctor';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{

    this.name = 'Melisa';
    this.gender= 'female';
  }

  //in18Select Pipe

  public clients: string[] = ['Paco', 'Julian', 'Amparo', 'Alfonso', 'David', 'Edudardo'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }

}
