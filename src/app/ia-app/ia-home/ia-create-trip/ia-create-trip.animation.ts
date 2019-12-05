import {
  AnimationMetadata,
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const IaCreateTripAnimation: AnimationMetadata[] = [
  trigger('wanderAnimation', [
    transition(':enter', [
      animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', keyframes([
        style({ height: '0', opacity: 0, offset: 0 }),
        style({ height: '*', opacity: 1, offset: 1 }),
      ]))
    ]),

    transition(':leave', [
      animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', keyframes([
        style({ height: '*', opacity: 1, offset: 0 }),
        style({ height: '0', opacity: 0, offset: 1 }),
      ]))
    ])
  ])
]