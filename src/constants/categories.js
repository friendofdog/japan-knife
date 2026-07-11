export const CATEGORIES = {
  ALL:               'all',
  HIGH_CARBON:       'high-carbon',
  STAINLESS:         'stainless',
  SEMI_STAINLESS:    'semi-stainless',
  POWDER_METALLURGY: 'powder-metallurgy',
};

export const CATEGORY_LABELS = {
  [CATEGORIES.ALL]:               'Show All Categories',
  [CATEGORIES.HIGH_CARBON]:       'High-Carbon Steels (Hagane)',
  [CATEGORIES.STAINLESS]:         'Conventional Stainless Steels',
  [CATEGORIES.SEMI_STAINLESS]:    'Semi-Stainless & Tool Steels',
  [CATEGORIES.POWDER_METALLURGY]: 'Powdered Metallurgy Steels (PM)',
};

export const CATEGORY_META = [
  { key: CATEGORIES.HIGH_CARBON,       icon: '🔨', label: 'High-Carbon' },
  { key: CATEGORIES.STAINLESS,         icon: '🛡️', label: 'Conventional Stainless' },
  { key: CATEGORIES.SEMI_STAINLESS,    icon: '⚙️', label: 'Semi-Stainless' },
  { key: CATEGORIES.POWDER_METALLURGY, icon: '💎', label: 'Powder Metallurgy' },
];
