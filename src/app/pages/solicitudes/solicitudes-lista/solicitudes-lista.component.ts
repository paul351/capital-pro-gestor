import { Component, OnInit, signal } from '@angular/core';
import { Solicitud, SolicitudElement } from 'src/app/models/solicitud';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-solicitudes-lista',
  templateUrl: './solicitudes-lista.component.html',
  styleUrls: ['./solicitudes-lista.component.scss']
})
export class SolicitudesListaComponent implements OnInit {

  data = signal<Solicitud | null>(null)

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data.set(this.dataService.getSolicitud())
    console.log(this.data());
  }

  onModal(data: SolicitudElement) {

  }
}
