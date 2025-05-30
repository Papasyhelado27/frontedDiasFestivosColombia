import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-festivos',
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './festivos.component.html',
  styleUrl: './festivos.component.css'
})
export class FestivosComponent {

  public textoBusqueda: String =""

  public buscar(){
    
  }

}
