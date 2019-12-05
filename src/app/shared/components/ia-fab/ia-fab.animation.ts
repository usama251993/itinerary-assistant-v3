import {
  state,
  style,
  transition,
  animate,
  trigger,
  query,
  keyframes,
  AnimationMetadata,
  group
} from '@angular/animations';

export const IaFabAnimation: AnimationMetadata[] = [
  trigger('fabToggleTrigger', [

    state('active', style({})),
    state('inactive', style({})),

    transition('* => active', [
      query(':enter', style({ opacity: 0 }), { optional: true }),

      group([
        query(':leave', animate('250ms cubic-bezier(0.4, 0.0, 0.0, 1)',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0)', offset: 1 }),
          ])), { optional: true }),

        query('div.fab-shadow', animate('500ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])), { optional: true }),

        query('div.fab-action-holder', animate('250ms 250ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 }),
          ])), { optional: true }),
      ]),
    ]),

    transition('active => *', [
      query(':enter', style({ transform: 'scale(0)' }), { optional: true }),

      group([
        query(':enter', animate('250ms 250ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({ transform: 'scale(0)', offset: 0 }),
            style({ transform: 'scale(1)', offset: 1 }),
          ])), { optional: true }),

        query('div.fab-shadow', animate('500ms cubic-bezier(0.4, 0.0, 0.0, 1)',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, offset: 1 }),
          ])), { optional: true }),

        query('div.fab-action-holder', animate('250ms cubic-bezier(0.4, 0.0, 0.0, 1)',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, offset: 1 }),
          ])), { optional: true }),
      ]),
    ])

  ]),
];