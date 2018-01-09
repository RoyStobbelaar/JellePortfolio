import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'footer',
  template: `    
    <div class="signature" (click)="navigate()">
      2017 Jelle de Jong
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {


  constructor(private _router: Router){

  }

  public navigate() {
    this._router.navigateByUrl('Home');
  }

}
