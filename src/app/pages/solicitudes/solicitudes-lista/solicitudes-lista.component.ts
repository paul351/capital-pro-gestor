import { Component, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proceso, Solicitud, SolicitudElement } from 'src/app/models/solicitud';
import { DataService } from 'src/app/services/data.service';
import { SolicitudesModalComponent } from '../solicitudes-modal/solicitudes-modal.component';
import { tiposProcesos } from 'src/app/services/data';

@Component({
  selector: 'app-solicitudes-lista',
  templateUrl: './solicitudes-lista.component.html',
  styleUrls: ['./solicitudes-lista.component.scss']
})
export class SolicitudesListaComponent implements OnInit {

  data = signal<Solicitud | null>(null)
  estado = '';
  afectado = signal('');
  dataCopia!: Solicitud | null;
  tiposProcesos = tiposProcesos

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.data.set(JSON.parse(sessionStorage.getItem('solicitud')!)? JSON.parse(sessionStorage.getItem('solicitud')!): this.dataService.getSolicitud() )
    sessionStorage.setItem('solicitud', JSON.stringify(this.data()))
    this.dataCopia = Object.assign({}, this.data()!)
  }

  onModal(tipo: string, data: SolicitudElement | null) {
    SolicitudesModalComponent.prototype.data = data
    SolicitudesModalComponent.prototype.tipo = tipo
    this.modalService.open(SolicitudesModalComponent, { keyboard: false, size: 'lg', backdrop: 'static' }).result.then((res: { success: boolean, data: SolicitudElement, tipo: string }) => {
      if (res?.success) {
        if (res.tipo == 'solicitud') {
          this.data.update(data => {
            data!.solicitud?.push(res.data)
            return data
          })
          sessionStorage.setItem('solicitud', JSON.stringify(this.data()))
        } else {
          this.data.update(data => {
            const index = data!.solicitud?.findIndex(element => element.idsolicitud == res.data.idsolicitud)
            data!.solicitud![index!] = res.data
            return data
          })
          sessionStorage.setItem('solicitud', JSON.stringify(this.data()))
        }
      }
    })
  }

  agregarEstado(procesos: Proceso[]) {
    for (let i = 0; i < procesos.length; i++) {
      for (const key in procesos[i]) {
        if (key == 'idtermino') {
          this.estado = 'terminado'
          break;
        }
        if (key == 'idimplementacion') {
          this.estado = 'implementado'
          break;
        }
        if (key == 'idevaluacion') {
          this.estado = 'evaluando'
          break;
        }
      }
    }
    return this.estado
  }
}
