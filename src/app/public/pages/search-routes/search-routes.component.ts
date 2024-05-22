import {Component, OnInit} from '@angular/core';
import {GoogleMap, GoogleMapsModule, MapDirectionsRenderer, MapDirectionsService} from "@angular/google-maps";
import {AsyncPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {map, Observable} from "rxjs";
import {Address} from "ngx-google-places-autocomplete/objects/address";


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

  params: any = {
    componentRestrictions: { country: 'IN' }
  }

  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: -12.0768506, lng: -77.0960512 },
    zoom: 15,
  };

  readonly directionsResults$: Observable<google.maps.DirectionsResult|undefined>;

  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      destination: {lat: -12.0768559, lng: -77.0934763 },
      origin: {lat: -12.0820405, lng: -77.0358746},
      travelMode: google.maps.TravelMode.TRANSIT
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }


  ngOnInit(): void {}

}
