import {
  state,
  style,
  transition,
  animate,
  trigger,
  query,
  stagger,
  keyframes
} from '@angular/animations';

export const IaFabAnimation = [
  trigger('fabToggle', [
    state('inactive', style({
      transform: 'rotate(0deg)'
    })),
    state('active', style({
      transform: 'rotate(135deg)'
    })),
    // transition('* => inactive', [
    //   query('fa-icon',
    //     animate('2500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
    //   )]),
    // transition('* => active', [
    //   query('fa-icon',
    //     animate('2500ms cubic-bezier(0.4, 0.0, 0.2, 1)')
    //   )])
    // transition('* => inactive', animate(250)),
    // transition('* => active', animate(250))
  ]),
  trigger('fabStagger', [
    transition('* => *', [

      query(':enter', style({ opacity: 0 }), { optional: true }),

      query(':enter', stagger('50ms',
        [
          animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            keyframes(
              [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                style({ opacity: 1, transform: 'translateY(0)' }),
              ]
            )
          )
        ]
      ), { optional: true }),

      query(':leave',
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          keyframes([
            style({ opacity: 1 }),
            style({ opacity: 0 }),
          ])
        ), { optional: true }
      )

    ])
  ])
];