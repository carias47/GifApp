import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private historialService: GifsService) {}
  get historial(): any {
    return this.historialService.historial;
  }
  buscar(termino: any) {
    this.historialService.buscarGifs(termino);
  }
}
