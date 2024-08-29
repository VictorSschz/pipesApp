import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private primeNhConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primeNhConfig.ripple = true;
    }
}
