import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer(
          'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmlzaGNoYWxwcm8iLCJhIjoiY2trZTJyYXY0MGdheTJwbWlqZ3U4aDA4NyJ9.97KOHN-noa6zpqKmM7jIHw',
          {
            attribution: '...',
          }
        ),
      ],
      zoom: 5,
      center: latLng(46.879966, -121.726909),
    };
  }
}
