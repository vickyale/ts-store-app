import {Component}  from '@angular/core';

export interface Course{
  id: number,
  name : string,
  image: string,
  price: number
}

const COURSES : Course[] =[
  {
        id:1,
        name : 'Angular 2',
        image : '../images/angular.png',
        price : 100
   },
{
        id:2,
        name : 'Python',
        image : '../images/python.png',
        price : 130
   }
]

@Component({
  selector: 'courses',
  template: `
<h2>{{title}}</h2>
<div class="courses_list">
<div class="course" *ngFor="let course of courses">
 
  <img [src]="course.image">
  <h2>{{course.name}}</h2>
  <span class="price">
  {{course.price | currency : 'USD': true : '1.2-2'}}
  
  </span>
  <button>Agregar al carrito </button>

</div>
</div>
  `,
})
export class CoursesComponent  { 
    title : string = 'Cursos Disponibles para Comprar'; 
    courses : Course  [] = COURSES;
}
