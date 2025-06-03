import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoType } from './photos.types';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  API_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<PhotoType[]>(this.API_URL);
  }
}
