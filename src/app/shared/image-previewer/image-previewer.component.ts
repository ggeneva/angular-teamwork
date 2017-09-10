import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-previewer',
  templateUrl: './image-previewer.component.html',
  styleUrls: ['./image-previewer.component.css']
})
export class ImagePreviewerComponent implements OnInit {

  @Input()
  maxSize: number;

  @Input()
  imageUrl;

  constructor() { }

  ngOnInit() {
  }
}
