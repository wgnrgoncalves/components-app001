import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uic-components-lib',
  template: `
    <p>
      components-lib works!
    </p>
    <h1>Ajuste do template</h1>
  `,
  styles: [
  ]
})
export class ComponentsLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
