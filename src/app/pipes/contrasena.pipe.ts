import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, val: boolean = false): string {

    let oculto = '';

    if ( val ){
      for ( let i = 0 ; i <= value.length ; i++  ){
        oculto += '*';
      }

      return oculto;

    }else{
      oculto = '';
      return value;
    }
  }

}
