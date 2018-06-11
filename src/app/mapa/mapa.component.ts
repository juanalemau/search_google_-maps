import { Component, OnInit, ViewChild, ElementRef, NgZone, Pipe } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MouseEvent  } from '@agm/core';
import {} from '@types/googlemaps';
import { NouisliderModule } from 'ng2-nouislider';
import { FilteEstablecimientoPipe } from './../filte-establecimiento.pipe';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  
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
  

  // Rubros variables 
  selectRubro: number = 0;

  // Establecimiento variables 
  selectEstablecimiento: any;

  // Distrito variables
  selectDistrito: number= 0;

  constructor() {}

  ngOnInit() {
  
  }

  // Seleccion del primer Filtro para Rubros
  selectRubroChange(event){
    this.selectRubro = event;
  };

  // Seleccion del primer Filtro para Distrito
  selectDistritoChange(event){
    this.selectDistrito = event;
  };

  // Seleccicon del segundo filtro para establecimientos segun tenga el filtro de Rubros
  selectEstablecimientoChange(event){
    let splitInfo = event;
    let info = splitInfo.split("/");

    this.lat = parseFloat(info[0]);
    this.lng = parseFloat(info[1]);
  
  }

  changeSlide(event){
    this.slideRange = event[1] + 1000;
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }  

  markerDragEnd(m: establecimientos, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  rubros: rubros[] = [
    {
      nombre: 'Farmacias',
      codigoRubro: 0,
      activate: false
    },
    {
      nombre: 'Hoteles',
      codigoRubro: 1,
      activate: false
    },
    {
      nombre: 'Restaurantes',
      codigoRubro: 2,
      activate: false
    }
  ];

  establecimientos: establecimientos[] = [
    {
      nombre: 'BTL 101 DELIVERY ANGAMOS',
      distrito: 0,
      rubro: 0,
      codigoEstablecimiento: 302629420,
      latitud: -12.11363168,
      longitud: -77.02496034,
      draggable: true
    },
    {
      nombre: 'FASA ARAMBURU',
      distrito: 0,
      rubro: 0,
      codigoEstablecimiento: 305354104,
      latitud: -12.102178,
      longitud: -77.01939303,
      draggable: true
    },
    {
      nombre: 'FASA REPUBLICA DE PANAMA',
      distrito: 0,
      rubro: 0,
      codigoEstablecimiento: 305354074,
      latitud: -12.1131913,
      longitud: -77.01854336,
      draggable: true
    },
    {
      nombre: 'INKAFARMA VILLARAN DV',
      distrito: 0,
      rubro: 0,
      codigoEstablecimiento: 331060138,
      latitud: -12.12076071,
      longitud: -77.00231646,
      draggable: true
    },
    {
      nombre: 'INKAFARMA SURQUILLO 4',
      distrito: 0,
      rubro: 0,
      codigoEstablecimiento: 331060246,
      latitud: -12.10223967,
      longitud: -77.02001652,
      draggable: true
    },
    {
      nombre: 'BOTICAS Y SALUD SRQLLO DV',
      distrito: 0,
      rubro: 0,
      codigoEstablecimiento: 384891085,
      latitud: -12.11938687,
      longitud: -77.02534416,
      draggable: true
    },
    {
      nombre: 'HOTEL OLAYA',
      distrito: 2,
      rubro: 1,
      codigoEstablecimiento: 101670801,
      latitud: -12.17099049,
      longitud: -77.02251752,
      draggable: true
    },
    {
      nombre: 'GRAN HOTEL AZUL',
      distrito: 2,
      rubro: 1,
      codigoEstablecimiento: 474317301,
      latitud: -12.17036424,
      longitud: -77.0227052,
      draggable: true
    },
    {
      nombre: 'LAS CANASTAS DELIVERY',
      distrito: 2,
      rubro: 1,
      codigoEstablecimiento: 518121106,
      latitud: -12.190578,
      longitud: -77.006682,
      draggable: true
    },
    {
      nombre: 'PARRILLADAS EL HORNERO',
      distrito: 2,
      rubro: 1,
      codigoEstablecimiento: 507179401,
      latitud: -12.1672533,
      longitud: -77.0282727,
      draggable: true
    },
    {
      nombre: 'POLLERIA EL LADRILLO DELI',
      distrito: 2,
      rubro: 1,
      codigoEstablecimiento: 600989502,
      latitud: -12.16840945,
      longitud: -77.02456217,
      draggable: true
    }
  ];

  distritos: distritos[] = [
    {
      nombre: 'Surquillo', 
      codigoDistrito: 0
    },
    {
      nombre: 'Ate', 
      codigoDistrito: 1
    },
    {
      nombre: 'Chorrillos', 
      codigoDistrito: 2
    },
    {
      nombre: 'Barranco', 
      codigoDistrito: 3
    },
    {
      nombre: 'Breña', 
      codigoDistrito: 4
    },
    {
      nombre: 'Callao', 
      codigoDistrito: 5
    },
    {
      nombre: 'Carbayllo', 
      codigoDistrito: 6
    },
    {
      nombre: 'Chaclacayo', 
      codigoDistrito: 7
    },
    {
      nombre: 'Comas', 
      codigoDistrito: 8
    },
    {
      nombre: 'El Agustino', 
      codigoDistrito: 9
    },
    {
      nombre: 'La Independencia', 
      codigoDistrito: 10
    },
    {
      nombre: 'La Molina', 
      codigoDistrito: 11
    },
    {
      nombre: 'La Victoria', 
      codigoDistrito: 12
    },
    {
      nombre: 'Lima Cercado', 
      codigoDistrito: 13
    },
    {
      nombre: 'Lince', 
      codigoDistrito: 14
    },
    {
      nombre: 'Los Olivos', 
      codigoDistrito: 15
    },
    {
      nombre: 'Magdalena del Mar', 
      codigoDistrito: 16
    },
    {
      nombre: 'Miraflores', 
      codigoDistrito: 17
    },
    {
      nombre: 'Pachacamac', 
      codigoDistrito: 18
    },
    {
      nombre: 'Pueblo Libre', 
      codigoDistrito: 19
    },
    {
      nombre: 'Puente Piedra', 
      codigoDistrito: 20
    },
    {
      nombre: 'Punta Negra', 
      codigoDistrito: 21
    },
    {
      nombre: 'Rimac', 
      codigoDistrito: 22
    },
    {
      nombre: 'San Borja', 
      codigoDistrito: 23
    },
    {
      nombre: 'San Isidro', 
      codigoDistrito: 24
    },
    {
      nombre: 'San Juan de Lurigancho', 
      codigoDistrito: 25
    },
    {
      nombre: 'San Juan de Miraflores', 
      codigoDistrito: 26
    },
    {
      nombre: 'San Luis', 
      codigoDistrito: 27
    }
  ];
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

interface rubros {
  nombre: string,
  codigoRubro: number,
  activate: boolean
}

interface establecimientos {
  nombre: string,
  distrito: number,
  rubro: number,
  codigoEstablecimiento: number,
  latitud: number,
  longitud: number,
  draggable: boolean
}

interface distritos {
  nombre: string, 
  codigoDistrito: number
}