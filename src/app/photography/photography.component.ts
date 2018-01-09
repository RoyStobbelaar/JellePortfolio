import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'photography',
  template: `

    <header></header>

    <carousel [photos]="photos"></carousel>

    <div class="left-options">
      <div class="option">
        Urban
      </div>
      <div class="option">
        Summer '17
      </div>
      <div class="option">
        Portraits
      </div>
    </div>

    <footer></footer>
    
  `,
  styleUrls: ['./photography.component.scss']
})

export class PhotographyComponent implements OnInit {

  public photos: string[];

  constructor() {

  }

  ngOnInit() {
    this.photos = [];
    this.photos.push('/assets/photo/photography1.png');
    this.photos.push('/assets/photo/photography2.png');
    this.photos.push('/assets/photo/photography3.png');
  }


}
