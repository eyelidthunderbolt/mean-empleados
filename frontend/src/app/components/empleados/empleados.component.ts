import { Component } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import {NgForm} from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';

declare var M : any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})



export class EmpleadosComponent {
  
  constructor (public empleadoService: EmpleadosService){

  }
  
  addEmployee(form: NgForm){

    if(form.value._id){

      this.empleadoService.actualizarEmpleado(form.value)
      .subscribe(res => {

        console.log(res);
        this.obtenerEmpleados()
        this.resetForm();
      })
    }

    else {
      form.value._id = null;
      this.empleadoService.crearEmpleado(form.value)
      .subscribe(res =>{
        console.log(res)
        this.resetForm(form)
        M.toast({html : "Empleado Almacenado"})
        this.obtenerEmpleados();
      })
    }
    }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.empleadoService.empleadoSeleccionado = new Empleado;
    }
  }

  obtenerEmpleados(){

    this.empleadoService.mostrarEmpleados()
    .subscribe(res => {
      this.empleadoService.empleados = res as Empleado[]; // mete en el array de empleados definido en Services la res que trae los empleados de la base de datos
      console.log(res)
    })
  }

 

  editarEmpleado(empleado: Empleado){
    this.empleadoService.empleadoSeleccionado = empleado;
  }

  eliminarEmpleado(_id : string){
    if(confirm("Desea eliminar empleado?")){
      this.empleadoService.eliminarEmpleado(_id)
      .subscribe(res => {
        this.obtenerEmpleados();
      });
      M.toast({html: "Empleado Eliminado"})
    }
    
  }

  ngOnInit(): void{

    this.obtenerEmpleados();
  }
}
