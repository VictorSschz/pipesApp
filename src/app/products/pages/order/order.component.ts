import { Component } from '@angular/core';
import { Hero, Color } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes : Hero [] = [
    {
    name: 'Spiderman',
    canFly: false,
    color: Color.red
    },
    {
    name: 'Superman',
    canFly: true,
    color: Color.blue
    },
    {
    name: 'Batman',
    canFly: false,
    color: Color.Black
    },
    {
    name: 'Hulk',
    canFly: false,
    color: Color.green
    },

]


  toggleUpperCase():void{

    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){

    debugger;
    this.orderBy = value;
  }
}
