import type {TokenGroup} from '../types';

export const legacy = {
  'override-loading-z-index': {
    value: '514',
  },
  'choice-size': {
    value: '20px',
  },
  'icon-size-small': {
    value: '8px',
  },
  'icon-size-medium': {
    value: '20px',
  },
  'choice-margin': {
    value: '1px',
  },
  'control-border-width': {
    value: '2px',
  },
  'banner-border-default': {
    value:
      'inset 0 1px 0 0 var(--p-color-border-strong), inset 0 0 0 1px var(--p-color-border-strong)',
  },
  'banner-border-success': {
    value:
      'inset 0 1px 0 0 var(--p-color-border-success-subdued), inset 0 0 0 1px var(--p-color-border-success-subdued)',
  },
  'banner-border-highlight': {
    value:
      'inset 0 1px 0 0 var(--p-color-border-info-subdued), inset 0 0 0 1px var(--p-color-border-info-subdued)',
  },
  'banner-border-warning': {
    value:
      'inset 0 1px 0 0 var(--p-color-border-caution-subdued), inset 0 0 0 1px var(--p-color-border-caution-subdued)',
  },
  'banner-border-critical': {
    value:
      'inset 0 1px 0 0 var(--p-color-border-critical-subdued), inset 0 0 0 1px var(--p-color-border-critical-subdued)',
  },
  'thin-border-subdued': {
    value: '1px solid var(--p-color-border-subdued)',
  },
  'text-field-spinner-offset': {
    value: '2px',
  },
  'text-field-focus-ring-offset': {
    value: '-4px',
  },
  'button-group-item-spacing': {
    value: '-1px',
  },
  'range-slider-thumb-size-base': {
    value: '16px',
  },
  'range-slider-thumb-size-active': {
    value: '24px',
  },
  'frame-offset': {
    value: '0px',
  },
};

export type LegacyTokenGroup = TokenGroup<typeof legacy>;
export type LegacyTokenName = keyof LegacyTokenGroup;
