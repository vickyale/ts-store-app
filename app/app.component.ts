import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
  Cursos 
  </header>
<section>
<courses></courses>
</section>
  `,
})
export class AppComponent  { name = 'Angular'; }
