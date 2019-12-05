import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
  keyframes
} from '@angular/animations';

export const IaRouteAnimations = [
  trigger('routeAnimations', [

    transition('* => createTripPage', [

      style({
        position: 'relative',
      }),

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

      style({
        position: 'relative',
      }),

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
  ])
];