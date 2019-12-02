import {
  state,
  style,
  transition,
  animate,
  trigger,
  query,
  stagger,
  keyframes,
  AnimationTriggerMetadata,
  AnimationReferenceMetadata,
  animation,
  AnimationMetadata
} from '@angular/animations';

// export const rotateAnimation: AnimationReferenceMetadata[] = [
//   animation([
//     animate(250, keyframes([

//     ]))
//   ])
// ];

export const IaFabAnimation: AnimationMetadata[] = [
  trigger('fabToggleTrigger', [
    // state('inactive', style({
    //   // transform: 'rotate(0deg)'
    // })),
    // state('active', style({
    //   // transform: 'rotate(135deg)'
    // })),
    transition('* => *', [
      query('enter', style({}), { optional: true }),
      query(':leave', animate(
        250,
        keyframes(
          [
            style({ backgroundColor: '#4285f4', offset: 0 }),
            style({ backgroundColor: '#fff', offset: 1 }),
          ]
        )
      ),
        { optional: true }
      )
      //   query('fa-icon', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
    transition('* => active', [
      //   query('fa-icon', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
    // transition('* => inactive', animate(250)),
    // transition('* => active', animate(250))
  ]),
  trigger('fabToggleStagger', [
    transition('* => *', [

      // query(':enter', style({ opacity: 0 }), { optional: true }),

      // query(':enter',
      //   animate(250, keyframes([
      //     style({ opacity: 0, transform: 'scale(0.75, 0.75)', offset: 0 }),
      //     style({ opacity: 1, transform: 'scale(1, 1)', offset: 1 }),
      //   ])),
      //   { optional: true })

      //     query(':enter', stagger('50ms',
      //       [
      //         animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      //           keyframes(
      //             [
      //               style({
      //                 opacity: 0,
      //                 // transform: 'scale(0, 0) translateY(72px)'
      //                 transform: 'translateY(72px)'
      //                 // transform: 'scale(0, 0)'
      //               }),
      //               style({
      //                 opacity: 1,
      //                 // transform: 'scale(1, 1) translateY(0)'
      //                 transform: 'translateY(0)'
      //                 // transform: 'scale(1, 1)'
      //               }),
      //             ]
      //           )
      //         )
      //       ]
      //     ), { optional: true }),

      //     query(':leave',
      //       animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      //         keyframes([
      //           style({ opacity: 1 }),
      //           style({ opacity: 0 }),
      //         ])
      //       ), { optional: true }
      //     )

    ])
  ])
];