import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
  keyframes,
  animateChild
} from '@angular/animations';

export const IaRouteAnimations = [
  trigger('routeAnimations', [

    transition('homePage => createTripPage', [

      style({ position: 'relative' }),

      query(':enter, :leave', style({
        position: 'absolute',
        top: '0%',
        left: '0%',
        right: '0%',
      })),

      query(':enter', style({ opacity: 0 })),

      group([
        query(':leave div.button:first-child', animate(
          '500ms 250ms cubic-bezier(0.4, 0.0, 1, 1)',
          keyframes([
            style({ transform: 'translate(0px, 0px)', opacity: 1, offset: 0 }),
            style({ transform: 'translate(-250px, 0px)', opacity: 0, offset: 1 }),
          ]),
        ), { optional: true }),

        query(':leave div.button:last-child', animate(
          '500ms 250ms cubic-bezier(0.4, 0.0, 1, 1)',
          keyframes([
            style({ transform: 'translate(0px, 0px)', opacity: 1, offset: 0 }),
            style({ transform: 'translate(250px, 0px)', opacity: 0, offset: 1 }),
          ]),
        ), { optional: true }),

        query(':enter', animate(
          '500ms 250ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({ transform: 'translate(0px, 50px)', opacity: 0, offset: 0 }),
            style({ transform: 'translate(0px, 0px)', opacity: 1, offset: 1 }),
          ]),
        ))
      ])

    ]),

    transition('* => homePage', [

      style({ position: 'relative' }),

      query(':enter, :leave', style({
        position: 'absolute',
        top: '0%',
        left: '0%',
        right: '0%',
      })),

      query(':enter div.button',
        style({ opacity: 0 }),
        { optional: true }),

      query(':leave', animate(
        '300ms cubic-bezier(0.4, 0.0, 1, 1)',
        keyframes([
          style({ transform: 'translate(0px, 0px)', opacity: 1, offset: 0 }),
          style({ transform: 'translate(0px, 50px)', opacity: 0, offset: 1 }),
        ]),
      ), { optional: true }),

      group([
        query(':enter div.button:first-child', animate(
          '300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({ transform: 'translate(-250px, 0px)', opacity: 0, offset: 0 }),
            style({ transform: 'translate(0px, 0px)', opacity: 1, offset: 1 }),
          ]),
        ), { optional: true }),
        query(':enter div.button:last-child', animate(
          '300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({ transform: 'translate(250px, 0px)', opacity: 0, offset: 0 }),
            style({ transform: 'translate(0px, 0px)', opacity: 1, offset: 1 }),
          ]),
        ), { optional: true }),
      ])

    ]),

    transition('createTripPage => viewTripPage', [
      // style({ position: 'relative' }),

      // // query(':enter mat-card *', style({ width: '0', height: '0', opacity: 0 })),
      // // query(':leave mat-card', style({ height: '*', width: '*' })),
      // query(':enter, :leave', style({ position: 'absolute', top: '0', left: '0', right: '0' })),
      // query(':leave', style({ height: '*', width: '*', opacity: 1 })),
      // query(':enter', style({ height: '0', width: '0', opacity: 0 })),

      // // group([
      // // query(':leave mat-card mat-card-title, :leave mat-card mat-card-actions', animate(
      // //   '5000ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      // //   keyframes([
      // //     style({ opacity: 1, offset: 0 }),
      // //     style({ opacity: 0, offset: 1 }),
      // //   ])
      // // )),

      // query(':leave mat-card > *', animate(
      //   '2500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   keyframes([
      //     style({ opacity: 1, offset: 0 }),
      //     style({ opacity: 0, offset: 1 }),
      //   ])
      // )),

      // query(':leave mat-card', animate(
      //   '2500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   keyframes([
      //     style({ width: '*', height: '*' }),
      //     style({ width: '0', height: '0' }),
      //   ])
      // )),

      // query(':enter mat-card', animate(
      //   '2500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   keyframes([
      //     style({ width: '0', height: '0' }),
      //     style({ width: '*', height: '*' }),
      //   ])
      // )),

      // query(':enter mat-card > *', animate(
      //   '2500ms  cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   keyframes([
      //     style({ opacity: 0, offset: 0 }),
      //     style({ opacity: 1, offset: 1 }),
      //   ])
      // )),

      // // ]),

      // // query(':enter mat-card *', animate(
      // //   '3000ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      // //   keyframes([
      // //     style({ width: '0', height: '0', opacity: 0, offset: 0 }),
      // //     style({ width: '*', height: '0', opacity: 0, offset: 0.5 }),
      // //     style({ width: '*', height: '*', opacity: 1, offset: 1 }),
      // //   ])
      // // )),

      query(':leave', animateChild()),

      query(':leave mat-card', [
        animate('5000ms cubic-bezier(0.4, 0.0, 0.0, 1)', keyframes([
          // style({ height: '*', width: '*', opacity: 1 }),
          // style({ height: '0', width: '*', opacity: 0 }),
          // style({ height: '0', width: '0', opacity: 0 }),
        ]))
      ]),

      query(':enter', [
        animate('5000ms cubic-bezier(0.0, 0.0, 0.2, 1)', keyframes([
          // style({ height: '0', width: '0', opacity: 0 }),
          // style({ height: '0', width: '*', opacity: 0 }),
          // style({ height: '*', width: '*', opacity: 1 }),
        ]))
      ]),

      query(':enter', animateChild()),

    ]),

    transition('viewTripPage => createTripPage', [
      //   style({ position: 'relative' }),

      //   // // query(':enter mat-card *', style({ width: '0', height: '0', opacity: 0 })),
      //   // // query(':leave mat-card', style({ height: '*', width: '*' })),
      //   query(':enter, :leave', style({ position: 'absolute', top: '0', left: '0', right: '0' })),

      //   // // group([
      //   // // query(':leave mat-card mat-card-title, :leave mat-card mat-card-actions', animate(
      //   // //   '5000ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   // //   keyframes([
      //   // //     style({ opacity: 1, offset: 0 }),
      //   // //     style({ opacity: 0, offset: 1 }),
      //   // //   ])
      //   // // )),

      //   // query(':leave mat-card > *', animate(
      //   //   '2500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   //   keyframes([
      //   //     style({ opacity: 1, offset: 0 }),
      //   //     style({ opacity: 0, offset: 1 }),
      //   //   ])
      //   // )),

      //   // query(':leave mat-card', animate(
      //   //   '2500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   //   keyframes([
      //   //     style({ width: '*', height: '*' }),
      //   //     style({ width: '0', height: '0' }),
      //   //   ])
      //   // )),

      //   // query(':enter mat-card', animate(
      //   //   '2500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   //   keyframes([
      //   //     style({ width: '0', height: '0' }),
      //   //     style({ width: '*', height: '*' }),
      //   //   ])
      //   // )),

      //   // query(':enter mat-card > *', animate(
      //   //   '2500ms  cubic-bezier(0.4, 0.0, 0.0, 1)',
      //   //   keyframes([
      //   //     style({ opacity: 0, offset: 0 }),
      //   //     style({ opacity: 1, offset: 1 }),
      //   //   ])
      //   // )),

      //   // // ]),

      //   // // query(':enter mat-card *', animate(
      //   // //   '3000ms cubic-bezier(0.0, 0.0, 0.2, 1)',
      //   // //   keyframes([
      //   // //     style({ width: '0', height: '0', opacity: 0, offset: 0 }),
      //   // //     style({ width: '*', height: '0', opacity: 0, offset: 0.5 }),
      //   // //     style({ width: '*', height: '*', opacity: 1, offset: 1 }),
      //   // //   ])
      //   // // )),

      query(':leave', animateChild()),

      query(':leave mat-card', [
        animate('5000ms cubic-bezier(0.4, 0.0, 0.0, 1)', keyframes([
          // style({ height: '*', width: '*', opacity: 1 }),
          // style({ height: '0', width: '*', opacity: 0 }),
          // style({ height: '0', width: '0', opacity: 0 }),
        ]))
      ]),

      query(':enter', [
        animate('5000ms cubic-bezier(0.0, 0.0, 0.2, 1)', keyframes([
          // style({ height: '0', width: '0', opacity: 0 }),
          // style({ height: '0', width: '*', opacity: 0 }),
          // style({ height: '*', width: '*', opacity: 1 }),
        ]))
      ]),

      query(':enter', animateChild()),

    ])

  ])
];