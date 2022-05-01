import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';

//pipe facilita la busqueda de datos sin alterar el arreglo

@NgModule({
  declarations: [
    FiltroPipe
  ],
  exports: [ FiltroPipe]
})
export class PipesModule { }
