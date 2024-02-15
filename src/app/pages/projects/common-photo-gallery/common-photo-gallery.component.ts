import { Component } from '@angular/core';
import { CommonPhotoGalleryService } from './common-photo-gallery.service';

@Component({
  selector: 'app-common-photo-gallery',
  templateUrl: './common-photo-gallery.component.html',
  styleUrls: ['./common-photo-gallery.component.scss']
})
export class CommonPhotoGalleryComponent {

  photoGallery:any = [];

  constructor(private commonPhotos: CommonPhotoGalleryService){}

  ngOnInit(){
    this.commonPhotos.GetRamkrushImages().subscribe(data => {
      this.photoGallery = data;
    })
  }

}
