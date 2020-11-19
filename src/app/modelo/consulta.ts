export interface Consulta{
    idConsulta: number
    id_paciente: number;
    id_medico: number;
    id_especialidad: number;
    num_consultorio: string;
    fecha: string;
    detalleConsulta: [{
        diagnostico: string;
        tratamiento: string;
    }]
}