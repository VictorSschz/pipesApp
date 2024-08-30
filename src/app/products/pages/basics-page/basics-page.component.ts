import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameUpper: string = 'VICTOR';
  public nameLower: string = 'victor';
  public fullName: string = 'VIctoR SaNCHeZ';
  public fecha: Date = new Date();
}
