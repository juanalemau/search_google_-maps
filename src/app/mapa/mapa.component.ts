import { Component, OnInit, ViewChild, ElementRef, NgZone, Pipe } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MouseEvent  } from '@agm/core';
import {} from '@types/googlemaps';
import { NouisliderModule } from 'ng2-nouislider';
import { MapaServiceService } from './../mapa-service.service';
import { Response } from '@angular/http';
//import { FilteEstablecimientoPipe } from './../filte-establecimiento.pipe';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  
  // Configuracion para el mapa 
  zoom: number = 12;

  lat: number = -12.0431800;
  lng: number =  -77.0282400;

  // Establecimiento

  // Rango en distancia
  range_distance: any;

  // Rango en Similaridad
  range_similarity: any;

  // Configuracion Rango
  someRange_distance: any = {
    behaviour: 'drag',
    start: [50],
    step: 1,
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'range',
      stepped: true,
      density: 4
    },
    tooltips: true,
  };

  someRange_similarity: any = {
    behaviour: 'drag',
    start: [0.5],
    step: 0.01,
    range: {
      min: 0,
      max: 1
    },
    pips: {
      mode: 'range',
      stepped: true,
      density: 4
    },
    tooltips: true

  };

  // Establecimiento 
  selectEstablecimiento: string = "548700501";

  constructor(private service: MapaServiceService) {}

  ngOnInit() {
    //this.service.getEstableshment().subscribe(datas => console.log(datas))
  }


  selectEstablecimientoChange(event){
  }

  establecimientos: establecimientos[] = [
    {
      id: "548700501",
      name: "PARRILLADAS EL HORNERO__BARRANCO",
      category: "RESTAURANTES",
      department: "LIMA",
      province: "LIMA",
      district: "BARRANCO",
      totalTransaction: 11722,
      totalAmount: 3010266.5,
      averageTicket: 183.5400095,
      latitude: -12.133824,
      longitude: -77.020061
    },
    {
        id: "511404702",
        name: "VIEJO FUNDO__BARRANCO",
        category: "RESTAURANTES",
        department: "LIMA",
        province: "LIMA",
        district: "BARRANCO",
        totalTransaction: 5785,
        totalAmount: 963617.7,
        averageTicket: 131.1116267,
        latitude: -12.1397275,
        longitude: -77.01789663
    },
    {
        id: "510670601",
        name: "EL PARRILLON__MIRAFLORES",
        category: "RESTAURANTES",
        department: "LIMA",
        province: "LIMA",
        district: "MIRAFLORES",
        totalTransaction: 2863,
        totalAmount: 682984.51,
        averageTicket: 189.1283023,
        latitude: -12.12816073,
        longitude: -77.02614336
    }
  ];

  estableciminetos_response: establecimiento_response[] = [
    {
      id: "302629028",
      name: "BOTICAS BTL__COMAS",
      category: "FARMACIA",
      department: "",
      province: "",
      district: "",
      totalTransaction: 1986,
      totalAmount: 116047.87,
      averageTicket: 36.74805664,
      latitude: -11.93353098,
      longitude: -77.04726451
    },
    {
      id: "302629416",
      name: "BTL111 COMAS4B DELIVERY__COMAS",
      category: "FARMACIA",
      department: "",
      province: "",
      district: "",
      totalTransaction: 434,
      totalAmount: 37732.35,
      averageTicket: 60.41824915,
      latitude: -11.9415252,
      longitude: -77.06233726
    },
    {
      id: "305354105",
      name: "FASA SANTA LUZMILA__COMAS",
      category: "FARMACIA",
      department: "",
      province: "",
      district: "",
      totalTransaction: 2428,
      totalAmount: 123138.32,
      averageTicket: 34.0042448,
      latitude: -11.94160897,
      longitude: -77.06187356
    },
    {
      id: "331060135",
      name: "INKAFARMA SAN FELIPE 4 DV__CARABAYLLO",
      category: "FARMACIA",
      department: "",
      province: "",
      district: "",
      totalTransaction: 337,
      totalAmount: 23302.97,
      averageTicket: 48.10458299,
      latitude: -11.89842268,
      longitude: -77.03810014
    }
  ]

}

interface establecimientos {
  id: string,
  name: string,
  category: string,
  department: string,
  province: string,
  district: string,
  totalTransaction: number,
  totalAmount: number,
  averageTicket: number,
  latitude: number,
  longitude: number
}

interface establecimiento_response {
  id: string,
  name: string,
  category: string,
  department: string,
  province: string,
  district: string,
  totalTransaction: number,
  totalAmount: number,
  averageTicket: number,
  latitude: number,
  longitude: number
}