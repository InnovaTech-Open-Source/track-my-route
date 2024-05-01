import {Component, OnInit} from '@angular/core';
import {GoogleMap, GoogleMapsModule, MapDirectionsRenderer, MapDirectionsService} from "@angular/google-maps";
import {AsyncPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {map, Observable} from "rxjs";
import TravelMode = google.maps.TravelMode;
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-search-routes',
  standalone: true,
  imports: [GoogleMap, MapDirectionsRenderer, GoogleMapsModule, AsyncPipe, ReactiveFormsModule, MatButtonToggle, MatInput, MatFormField, FormsModule, MatLabel, MatIconModule],
  templateUrl: './search-routes.component.html',
  styleUrl: './search-routes.component.css'
})
export class SearchRoutesComponent implements OnInit{
  textOrigen = "Ingrese Origen";
  textDestino = "Ingrese Destino";
  ngOnInit(): void {}
  center: google.maps.LatLngLiteral = {
    lat: -12.0768506,
    lng: -77.0960512
  };
  zoom = 15;
  readonly directionsResults$: Observable < google.maps.DirectionsResult | undefined > ;
  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      origin: 'Chicago, IL',
      destination: 'Los Angeles, CA',
      waypoints: [
        {
          location: 'Joplin, MO',
          stopover: false
        },{
          location: 'Oklahoma City, OK',
          stopover: true
        }],
      provideRouteAlternatives: false,
      travelMode: TravelMode.TRANSIT,
      drivingOptions: {
        departureTime: new Date(/* now, or future date */),
      },
      unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));

  }
}
