import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
//Funcion busqueda
  transform(arreglo: any, texto: string): any {
    if( texto === '' ){
      return arreglo;
    }
    
    texto= texto.toLowerCase(); 

   return arreglo.filter( item => {
      return item.titulo.toLowerCase()
                .includes( texto );
    });
   
  }

}
