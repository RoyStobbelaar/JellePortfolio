import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'renders',
  template: `    
    <header></header>
    
    <carousel [photos]="photos"></carousel>
    
    <div class="left-options">
      <div class="option">
        Low poly
      </div>
      <div class="option">
        Other renders
      </div>
    </div>
    
    <footer></footer>
  `,
  styleUrls: ['./renders.component.scss']
})

export class RendersComponent implements OnInit {

  public photos: string[];

  constructor() {

  }

  ngOnInit() {
    this.photos = [];
    this.photos.push('/assets/photo/Background1.png');
    this.photos.push('/assets/photo/Background2.png');
  }

}
