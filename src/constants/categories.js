export const CATEGORIES = {
  ALL:               'all',
  HIGH_CARBON:       'high-carbon',
  STAINLESS:         'stainless',
  SEMI_STAINLESS:    'semi-stainless',
  POWDER_METALLURGY: 'powder-metallurgy',
};

export const CATEGORY_TO_LOCALE = {
  [CATEGORIES.ALL]:               'all',
  [CATEGORIES.HIGH_CARBON]:       'highCarbon',
  [CATEGORIES.STAINLESS]:         'stainless',
  [CATEGORIES.SEMI_STAINLESS]:    'semiStainless',
  [CATEGORIES.POWDER_METALLURGY]: 'powderMetallurgy',
};

export const CATEGORY_META = [
  { key: CATEGORIES.HIGH_CARBON,       icon: '🔨' },
  { key: CATEGORIES.STAINLESS,         icon: '🛡️' },
  { key: CATEGORIES.SEMI_STAINLESS,    icon: '⚙️' },
  { key: CATEGORIES.POWDER_METALLURGY, icon: '💎' },
];
