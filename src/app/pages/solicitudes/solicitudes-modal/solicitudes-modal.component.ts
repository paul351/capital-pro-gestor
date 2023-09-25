import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudElement } from 'src/app/models/solicitud';
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
  formGroup!: FormGroup; 

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.data) {
      this.formGroupInit();
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
    console.log(this.data);
  }

  onGuardar() {
    if (this.tipo == 'solicitud') {
      this.formGroup.get('fecha_creacion')?.setValue(this.fechaActual.toLocaleString("sv-SE", {hour12: false}))
      this.activeModal.close({success: true, data: this.formGroup.getRawValue(), tipo: this.tipo})
    }
  }

  addEvaluacion(){
    this.proceso.push(this.formBuilder.group({
      idevaluacion: [null],
      idsolicitud: [null],
      fecha_evaluacion: [null],
      evaluacion: [null],
      fecha_creacion: [null],
    }))
  }

  addImplementacion(){
    this.proceso.push(this.formBuilder.group({
      idimplementacion: [null],
      idsolicitud: [null],
      fecha_implementacion: [null],
      implementacion: [null],
      fecha_creacion: [null],
    }))
  
  }

  addTermino(){
    this.proceso.push(this.formBuilder.group({
      idtermino: [null],
      idsolicitud: [null],
      fecha_termino: [null],
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
      fecha_solicitud: [`${this.fechaActual.getFullYear()}-${this.fechaActual.getMonth() + 1}-${this.fechaActual.getDate()}`],
      solicitud: [null],
      fecha_creacion: [null],
      afectado: [null],
      proceso: this.formBuilder.array([])
    })
  }

}
