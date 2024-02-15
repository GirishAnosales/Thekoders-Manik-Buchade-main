import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonPhotoGalleryService {

  constructor(private http: HttpClient) { }

  GetRamkrushImages(){
    return this.http.get('../../../../assets/json_file/ramkrushna.json');
  }
  
}
