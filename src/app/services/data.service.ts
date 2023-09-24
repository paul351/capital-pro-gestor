import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSolicitud(): Solicitud {
    return {
      "solicitud": [
        {
          "idsolicitud": "4",
          "fecha_solicitud": "2023-07-18",
          "solicitud": "Solicitan arrendamiento de una bomba para riego de 210 manzanas de tierra.",
          "fecha_creacion": "2023-07-18 04:18:41",
          "afectado": "Juan Salcedo",
          "proceso": [
            {
              "idevaluacion": "3",
              "idsolicitud": "4",
              "fecha_evaluacion": "2023-07-18",
              "evaluacion": "En análisis por el comité de CSR.",
              "fecha_creacion": "2023-07-18 05:18:41"
            },
            {
              "idimplementacion": "2",
              "idsolicitud": "4",
              "fecha_implementacion": "2023-07-18",
              "implementacion": "Se implemento arrendamiento de una bomba para riego ",
              "fecha_creacion": "2023-07-18 06:18:41"
            }
          ]
        },
        {
          "idsolicitud": "3",
          "fecha_solicitud": "2023-07-17",
          "solicitud": "Solicitud corresponde a rótulos de identificación de la aldea y señalización de cruce para las aldeas San Benito la Bomba y Las Animas. Así, como rótulos de ornato ( No tirar basura).",
          "fecha_creacion": "2023-07-17 03:18:41",
          "afectado": "Sandra Billar",
          "proceso": [
            {
              "idevaluacion": "4",
              "idsolicitud": "3",
              "fecha_evaluacion": "2023-07-18",
              "solicitud_evaluacion": "En análisis por el comité de Relaciones Comunitarias.",
              "fecha_creacion": "2023-07-18 04:18:41"
            },
            {
              "idimplementacion": "3",
              "idsolicitud": "3",
              "fecha_implementacion": "2023-07-18",
              "implementacion": "Se implemento ótulos de identificación de la aldea y señalización de cruce ",
              "fecha_creacion": "2023-07-18 05:18:41"
            }
          ]
        },
        {
          "idsolicitud": "2",
          "fecha_solicitud": "2023-07-13",
          "solicitud": "Solicita un plan o respuesta como solucionar la excesiva velocidad de los vehículos de la empresa, proveedores y transporte particular de sus empleados.",
          "fecha_creacion": "2023-07-13 04:18:41",
          "afectado": "Cameron Diaz",
          "proceso": [
            {
              "idevaluacion": "1",
              "idsolicitud": "2",
              "fecha_evaluacion": "2023-07-13",
              "evaluacion": "En evaluación por el comité de análisis de CSR.",
              "fecha_creacion": "2023-07-13 05:18:41"
            },
            {
              "idevaluacion": "2",
              "idsolicitud": "2",
              "fecha_evaluacion": "2023-07-13",
              "evaluacion": "El Sr. Juan Perez solicita se le presente un plan de cómo estamos verificando y sensibilizando al personal tanto de la empresa como de los contratistas para que respeten los límites de velocidad y respeten la presencia de población en la vía",
              "fecha_creacion": "2023-07-13 06:18:41"
            },
            {
              "idimplementacion": "1",
              "idsolicitud": "2",
              "fecha_implementacion": "2023-07-13",
              "implementacion": "Se implemento un plan o respuesta como solucionar la excesiva velocidad de los vehículos de la empresa",
              "fecha_creacion": "2023-07-13 07:18:41"
            }
          ]
        }
      ]
    }
  }
}
