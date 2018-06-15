import { Component, OnInit, ViewChild, ElementRef, NgZone, Pipe } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MouseEvent  } from '@agm/core';
import {} from '@types/googlemaps';
import { NouisliderModule } from 'ng2-nouislider';
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

  // Configuracion Rango
  slideRange: any;
  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 10],
    margin: 1,
    limit: 5, 
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'steps',
      density: 5
    }
  };

  constructor() {}

  ngOnInit() {
  
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