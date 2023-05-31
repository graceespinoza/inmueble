import { Usuarios } from "./Usuarios";

export interface Inmueble{
    id_inmueble: number,
    nombre:string,
    direccion:string,
    precio: number,
    tipo_inmuble: string,
    estado:string,
    usuarios:Usuarios
}