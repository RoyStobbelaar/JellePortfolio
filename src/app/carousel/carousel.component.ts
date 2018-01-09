import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'carousel',
  template: `

    <div class="carousel-wrapper">
      <img #exit [src]="selectedImage" class="image" [ngClass]="{'leave': isRotating}">
      <img #enter [src]="rotatingImage" class="image">
    </div>

  `,
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  public selectedImage: string;
  public rotatingImage: string;
  public isRotating: boolean;

  private index: number;
  private pictureAmount: number;
  private secondsOffset: number = 4000;

  @Input() photos: string[];
  @Input() test: boolean;

  @ViewChild('exit') exit: ElementRef;
  @ViewChild('enter') enter: ElementRef;

  constructor() {

  }

  ngOnInit() {
    this.pictureAmount = this.photos.length;

    //default
    this.index = 0;
    this.selectedImage = this.photos[this.index];
    this.rotatingImage = this.photos[this.index + 1];

    this.rotate();

  }

  public rotate() {

    setTimeout(() => {

      this.isRotating = true;
      setTimeout(() => {
        this.isRotating = false;
        this.selectedImage = this.rotatingImage;
      },1000);

      if (this.index < this.pictureAmount - 1) {
        this.index++;
      } else {
        this.index = 0;
      }

      this.rotatingImage = this.photos[this.index];

      this.rotate();

    },5000);
  }
}
