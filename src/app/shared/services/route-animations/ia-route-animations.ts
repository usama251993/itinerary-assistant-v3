import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

export const IaRouteAnimations = [
  trigger('routeAnimations', [

    transition('homePage => createTripPage', [

      style({
        position: 'relative',
        transform: 'translate(0px, 0px)',
        opacity: 1
      }),

      query(':enter, :leave', style({
        position: 'absolute',
        top: '0%',
        left: '0%',
        right: '0%',
      })),

      query(':enter', style({
        transform: 'translate(0px, 50px)',
        opacity: 0
      })),

      group([
        query(':leave div.button:first-child', animate(
          '300ms',
          style({
            transform: 'translate(-250px, 0px)',
            opacity: 0
          })
        ), { optional: true }),

        query(':leave div.button:last-child', animate(
          '300ms',
          style({
            transform: 'translate(250px, 0px)',
            opacity: 0
          })
        ), { optional: true }),

        query(':enter', animate(
          '150ms 150ms',
          style({
            transform: 'translate(0px)',
            opacity: 1
          })
        ))
      ])

    ]),

    transition('* => homePage', [

      style({
        position: 'relative',
        transform: 'translate(0px, 0px)',
        opacity: 1
      }),

      query(':enter, :leave', style({
        position: 'absolute',
        top: '0%',
        left: '0%',
        right: '0%',
        transform: 'translate(0px, 0px)',
        opacity: 1
      })),

      group([
        query(':enter div.button:first-child',
          style({
            transform: 'translate(-250px, 0px)',
            opacity: 0
          }),
          { optional: true }),

        query(':enter div.button:last-child',
          style({
            transform: 'translate(250px, 0px)',
            opacity: 0
          }),
          { optional: true }),
      ]),

      // group([
      query(':leave', animate(
        '150ms',
        style({
          transform: 'translate(0px, 50px)',
          opacity: 0
        })
      ), { optional: true }),

      query(':enter div.button', animate(
        '300ms',
        style({
          transform: 'translate(0px, 0px)',
          opacity: 1
        })
      ), { optional: true }),
      // ])

    ]),
  ])
];