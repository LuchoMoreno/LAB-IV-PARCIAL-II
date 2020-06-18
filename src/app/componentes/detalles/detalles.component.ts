// PONGO EL INPUT PARA TRAERME ALGO DE LISTADO.
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  @Input() persona;

  constructor() { }

  ngOnInit(): void {
    console.log(this.persona);
  }

}
