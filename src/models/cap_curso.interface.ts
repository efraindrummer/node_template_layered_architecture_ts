export interface ICapCurso {
    ID: number;
    DNF?: string; // Opcional, si puede ser `null`
    CURSO?: string;
    EMPRESA?: string;
    ID_PROVEEDOR?: number;
    ID_CAPACITADOR_INT?: string;
    FECHAINI?: Date;
    FECHAFIN?: Date;
    HORARIOINI?: Date;
    HORARIOFIN?: Date;
    HORAS?: number;
    LUGAR?: string;
    ID_SUCURSAL?: number;
    ID_SALA?: number;
    OTRO_LUGAR?: string;
    FACTURACOSTO?: string;
    FACTURAINSUMOS?: string;
    STATUS?: string;
    INSTRUCTOR?: number;
    INSUMOS?: number;
    COSTO?: number;
    YEAR?: number;
    ID_CURSO?: number;
    INSTRUCTOR_EXTERNO?: string;
    CERTIFICACION?: string;
    CERTVIGENCIA?: Date;
    CERTVIGENCIAFIN?: Date;
    NUMCERTIFICACION?: string;
    TIPO_CURSO?: string;
    COMENTARIOS?: string;
    TEMATICA?: string;
}
