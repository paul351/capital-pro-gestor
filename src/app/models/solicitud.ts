export interface Solicitud {
    solicitud: SolicitudElement[] | null;
}

export interface SolicitudElement {
    idsolicitud: string;
    fecha_solicitud: Date|string;
    solicitud: string;
    fecha_creacion: Date|string;
    afectado: string;
    proceso: Proceso[];
}

export interface Proceso {
    idevaluacion?: string;
    idsolicitud: string;
    fecha_evaluacion?: Date|string;
    evaluacion?: string;
    fecha_creacion: Date|string;
    idimplementacion?: string;
    fecha_implementacion?: Date|string;
    implementacion?: string;
    solicitud_evaluacion?: string;
}