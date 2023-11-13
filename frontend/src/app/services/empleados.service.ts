import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({ providedIn: 'root' })

export class EmpleadosService {

  empleadoSeleccionado: Empleado;
  empleados: Empleado[]; // array para almacenar los empleados que vamos obteniendo
  readonly URL = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {

    this.empleadoSeleccionado = new Empleado();
    this.empleados = [];
  }

  mostrarEmpleados() {

    return this.http.get(this.URL); // devuelve todos los empleados en array
  }

  crearEmpleado(empleado: Empleado) {

    return this.http.post(this.URL, empleado);


  }

  actualizarEmpleado(empleado: Empleado) {
    return this.http.put(this.URL + `/${empleado._id}`, empleado)


  }

  eliminarEmpleado(_id: string) {

    return this.http.delete(this.URL + `/${_id}`)


  }

  
}
