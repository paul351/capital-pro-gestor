import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudElement } from 'src/app/models/solicitud';
import { tiposProcesos } from 'src/app/services/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-solicitudes-modal',
  templateUrl: './solicitudes-modal.component.html',
  styleUrls: ['./solicitudes-modal.component.scss']
})
export class SolicitudesModalComponent implements OnInit {
  public data!: SolicitudElement | null;
  public tipo!: string;
  fechaActual: Date = new Date();
  fechaActualString: string = `${this.fechaActual.getFullYear()}-${this.fechaActual.getMonth() + 1}-${this.fechaActual.getDate()}`
  formGroup!: FormGroup; 
  detalle: string = '';
  tipoProceso: number = 0;
  tipoProcesoData = this.dataService.getTipoProceso()

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.data) {
      this.formGroupInit();
      this.data.proceso.forEach(element => {
        if (element.idtermino) this.addTermino()
        if (element.idimplementacion) this.addImplementacion()
        if (element.idevaluacion) this.addEvaluacion()
      })
      this.formGroup.patchValue(this.data);
    } else {
      this.formGroupInit();
      this.formGroup.controls['idsolicitud'].setValue(this.dataService.generateUUID())
    }
    if (this.tipo == 'solicitud') {
      this.formGroup.get('solicitud')?.setValidators([Validators.required])
      this.formGroup.get('afectado')?.setValidators([Validators.required])
      this.formGroup.updateValueAndValidity()
    }
  }

  onGuardar() {
    if (this.tipo == 'solicitud') {
      this.formGroup.get('fecha_creacion')?.setValue(this.fechaActual.toLocaleString("sv-SE", {hour12: false}))
    }
    if (this.tipo == 'gestion') {
      switch (Number(this.tipoProceso)) {
        case tiposProcesos.evaluacion:
          this.addEvaluacion();
          this.formGroup.patchValue({estado: 1})
          this.proceso.at(this.proceso.length - 1).patchValue({
            idevaluacion: this.dataService.generateUUID(),
            idsolicitud: this.data?.idsolicitud,
            fecha_creacion: this.fechaActual.toLocaleString("sv-SE", {hour12: false}),
            evaluacion: this.detalle,
          })
          break;
        case tiposProcesos.implementacion:
          this.addImplementacion();
          this.formGroup.patchValue({estado: 2})
          this.proceso.at(this.proceso.length - 1).patchValue({
            idimplementacion: this.dataService.generateUUID(),
            idsolicitud: this.data?.idsolicitud,
            implementacion: this.detalle,
            fecha_creacion: this.fechaActual.toLocaleString("sv-SE", {hour12: false}),
          })
          break;
        case tiposProcesos.termino:
          this.addTermino();
          this.formGroup.patchValue({estado: 3})
          this.proceso.at(this.proceso.length - 1).patchValue({
            idtermino: this.dataService.generateUUID(),
            idsolicitud: this.data?.idsolicitud,
            termino: this.detalle,
            fecha_creacion: this.fechaActual.toLocaleString("sv-SE", {hour12: false}),
          })
          break;
        default:
          break;
      }
    }
    this.activeModal.close({success: true, data: this.formGroup.getRawValue(), tipo: this.tipo})
  }

  addEvaluacion(){
    this.proceso.push(this.formBuilder.group({
      idevaluacion: [null],
      idsolicitud: [null],
      fecha_evaluacion: [this.fechaActualString],
      evaluacion: [null],
      fecha_creacion: [null],
    }))
  }

  addImplementacion(){
    this.proceso.push(this.formBuilder.group({
      idimplementacion: [null],
      idsolicitud: [null],
      fecha_implementacion: [this.fechaActualString],
      implementacion: [null],
      fecha_creacion: [null],
    }))
  
  }

  addTermino(){
    this.proceso.push(this.formBuilder.group({
      idtermino: [null],
      idsolicitud: [null],
      fecha_termino: [this.fechaActualString],
      termino: [null],
      fecha_creacion: [null],
    }))
  
  }

  get proceso() {
    return this.formGroup.get('proceso') as FormArray;
  }

  formGroupInit() {
    this.formGroup = this.formBuilder.group({
      idsolicitud: [null],
      fecha_solicitud: [this.fechaActualString],
      solicitud: [null],
      fecha_creacion: [null],
      afectado: [null],
      estado: [0],
      proceso: this.formBuilder.array([])
    })
  }

}
