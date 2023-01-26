import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  listaMaterias: any=['Fisica', 'Quimica', 'Literatura', 'Metodo cientifico']

  days: any=['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

  listaEstudiantes: Estudiante[] = [
    { nombre: 'Mariana Martinez', curso: 'Fisica', activo: true, promedio: 9.9 , fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00'},
    { nombre: 'Sophia Dominguez', curso: 'Quimica', activo: true, promedio: 6.5, fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00' },
    { nombre: 'Rodrigo Juarez', curso: 'Literatura', activo: false, promedio: 4.2, fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00' },
    { nombre: 'Miguel Diaz', curso: 'Metodo cientifico', activo: true, promedio: 3.2, fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00' },
    { nombre: 'Ivonne Ordoñes', curso: 'Fisica', activo: true, promedio: 8.2 , fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00'},
    { nombre: 'Susana Islas', curso: 'Quimica', activo: true, promedio: 9, fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00' },
    { nombre: 'Berenice Escobar', curso: 'Literatura', activo: false, promedio: 4.2, fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00' },
    { nombre: 'Ramiro Estrada', curso: 'Metodo cientifico', activo: true, promedio: 9.2, fechaInicioCurso: '2022-06-18T00:00:00', fechaFinCurso: '2022-12-23T00:00:00' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
