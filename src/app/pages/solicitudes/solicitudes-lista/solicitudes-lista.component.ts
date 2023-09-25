import { Component, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Solicitud, SolicitudElement } from 'src/app/models/solicitud';
import { DataService } from 'src/app/services/data.service';
import { SolicitudesModalComponent } from '../solicitudes-modal/solicitudes-modal.component';

@Component({
  selector: 'app-solicitudes-lista',
  templateUrl: './solicitudes-lista.component.html',
  styleUrls: ['./solicitudes-lista.component.scss']
})
export class SolicitudesListaComponent implements OnInit {

  data = signal<Solicitud | null>(null)

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.data.set(this.dataService.getSolicitud())
    console.log(this.data());
  }

  onModal(tipo: string, data: SolicitudElement | null) {
    SolicitudesModalComponent.prototype.data = data
    SolicitudesModalComponent.prototype.tipo = tipo
    this.modalService.open(SolicitudesModalComponent, { keyboard: false, size: 'lg' }).result.then((res : {success: boolean, data: SolicitudElement, type: string}) => {
      if (res?.success) {
        this.data.update( data => {
          data!.solicitud?.push(res.data)
          return data
        })
      }
      console.log(this.data());
    })
  }
}
