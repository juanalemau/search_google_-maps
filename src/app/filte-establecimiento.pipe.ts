import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteEstablecimiento'
})
export class FilteEstablecimientoPipe implements PipeTransform {

  transform(value: any, args?, args2?){

    let listEstablecimiento = [];
    let searchEstablecimiento = value.find(function(element) {
      if(args == element.distrito && args2 == element.rubro){
        listEstablecimiento.push(element);
      }
    });
    
    return listEstablecimiento;
    
    
  }

}
