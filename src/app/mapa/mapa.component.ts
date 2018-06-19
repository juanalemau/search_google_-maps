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
  establecimientos: any;

  // Rango en distancia
  range_distance: any;

  // Rango en Similaridad
  range_similarity: any;

  // active table and map 
  activeTableMap: boolean = false;

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
  establecimiento_response: any;

  // Montos de Establecimiento
  totalNumberOfCompetitor: any;
  totalAmount: any;
  totalTransaction: any;
  total_average_ticket: any;


  constructor(private service: MapaServiceService) {}

  ngOnInit() {
    this.service.getEstableshment().subscribe(data => this.establecimientos = data);
  }

  

  selectEstablecimientoChange(event){
  }

  searchMap(){

    let responseEstableshment = {
      establishment: this.selectEstablecimiento,
      distance: this.range_distance,
      score: this.range_similarity
    };

    this.service.postEstableshment(responseEstableshment)
    .subscribe(data => {
      this.establecimiento_response = data;
      this.totalNumberOfCompetitor = this.establecimiento_response.length;
      let arrayTotalAmount = [],
        arrayTotalTrx = [],
        arrayTotalAverageTicket = [];

      this.establecimiento_response.forEach(function(value){
        arrayTotalAmount.push(value.totalAmount);
        arrayTotalTrx.push(value.totalTransaction);
        arrayTotalAverageTicket.push(value.averageTicket);
      });
      this.totalAmount = arrayTotalAmount.reduce((a,b) => a+b, 0);
      this.totalTransaction = arrayTotalTrx.reduce((a,b) => a+b, 0);
      this.total_average_ticket = arrayTotalAverageTicket.reduce((a,b) => a+b, 0);
      this.activeTableMap = true;
    });

    
  }

}