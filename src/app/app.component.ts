import { Component } from '@angular/core';
import { trigger, transition, query, group, style, animate } from '@angular/animations';

/**
 * Animation component to move from one page to another.
 *  
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('router',[
      transition('0=>1, 1=>0, 1=>2, 2=>1, 0=>2, 2=>0',[
        group([
          query(':enter',[
            style({
              transform: 'translateX(100%)'
            }),
            animate(500, style({
              transform:'translateX(0)'
            }))
          ]),
          query(':leave',[
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform:'translateX(-100%)'
            }))
          ])
        ])
        
      ])
    ])
  ]
})

export class AppComponent {
 //  title = 'Fruit';
}
