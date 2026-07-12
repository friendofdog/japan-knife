const en = {
  ui: {
    siteTitle: 'Japanese Knife Steel Reference Guide',
    siteSubtitle: 'Interactive metallurgical matrix spanning carbon, stainless, semi-stainless, and powder compositions',
    filterLabel: 'Filter by Category:',
    footerText: 'Japanese Knife Steel Performance Matrices • Interactive Reference Chart',
    columns: {
      maxSharpness: 'Max Sharpness',
      corrosionRes: 'Corrosion Res.',
      edgeRetention: 'Edge Retention',
      toughness: 'Toughness',
      easeOfSharp: 'Ease of Sharp.',
      maxHardness: 'Max Hardness',
      value: 'Relative Cost',
    },
    tableHeaders: {
      steelType: 'Steel Type',
      intendedUse: 'Intended Use & Characteristics',
    },
    categoryLabels: {
      all: 'Show All Categories',
      highCarbon: 'High-Carbon Steels',
      stainless: 'Conventional Stainless Steels',
      semiStainless: 'Semi-Stainless & Tool Steels',
      powderMetallurgy: 'Powdered Metallurgy Steels (PM)',
    },
    categoryMetaLabels: {
      highCarbon: 'High-Carbon',
      stainless: 'Conventional Stainless',
      semiStainless: 'Semi-Stainless',
      powderMetallurgy: 'Powder Metallurgy',
    },
  },
  steels: {
    white1: {
      name: 'White #1',
      sub: 'Shirogami',
      use: 'Ultra-delicate slicing (Yanagiba/Usuba). Offers the keenest geometric edge possible but chips easily.',
    },
    white2: {
      name: 'White #2',
      sub: 'Shirogami',
      use: 'General purpose traditional blades (Gyuto, Santoku). A highly popular, purist workhorse carbon steel.',
    },
    white3: {
      name: 'White #3',
      sub: 'Shirogami',
      use: 'Entry-level traditional knives. Highly forgiving to forge and sharpen, structurally stable.',
    },
    blue1: {
      name: 'Blue #1',
      sub: 'Aogami',
      use: 'High-end precision slicing and push-cutting. Holds its candy, biting edge notably longer than White steel.',
    },
    blue2: {
      name: 'Blue #2',
      sub: 'Aogami',
      use: 'All-around master smith kitchen knives. Incredible balance of edge-life, toughness, and crisp whetstone feedback.',
    },
    aogamiSuper: {
      name: 'Aogami Super',
      sub: 'Blue Super',
      use: 'Boutique custom knives for extended slicing/dicing sessions. Exceptional peak wear resistance for a carbon steel.',
    },
    vToku2: {
      name: 'V-Toku2',
      sub: 'Takefu Carbon Alloy',
      use: 'Artisan double-bevel knives and striking clad geometries (e.g., Rainbow Damascus). Functions like a slightly tougher, more alloy-stable alternative to Blue #2.',
    },
    swedenKo: {
      name: 'Sweden-ko',
      sub: 'Swedish Carbon Steel',
      use: 'Classic monosteel Western-style Japanese chef knives (Yo-Gyuto). Highly favored by high-volume line cooks for its blindingly fast response on a whetstone.',
    },
    'tamahagane': {
      name: 'Tamahagane',
      sub: 'Traditional Jewel Steel',
      use: 'Ultra-exclusive collector pieces and custom swords. Culturally significant, forged from iron sands.',
    },
    'nihonko': {
      name: 'Nihonko',
      sub: 'Standard Japanese Carbon',
      use: 'High-value entry-level butcher knives, Sabaki, and classic Western-handle kitchen utility blades. Provides an affordable path into true carbon steel properties.',
    },
    skSteels: {
      name: 'SK Steels',
      sub: 'SK3, SK4, SK5',
      use: 'Heavy butchering tools, budget Honesuki, or utility kitchen knives. Highly durable and takes abuse well.',
    },
    vg10: {
      name: 'VG-10',
      sub: 'Takefu Premium',
      use: 'Mass-market premium home/commercial line Gyutos. Prone to micro-chipping if misused; can feel slightly gummy to sharpen.',
    },
    // vg1Vg5: {
    //   name: 'VG-1 / VG-5',
    //   sub: 'Resilient Stainless',
    //   use: 'Entry-to-mid level commercial kitchen knives. Harder to chip, making them excellent utility options.',
    // },
    vg1: {
      name: 'VG-1',
      sub: 'V-Gold Original',
      use: 'Mid-tier commercial and Western-style Japanese handles. Takes a crisp, bitey edge due to its higher carbon content, but requires mindful cutting to avoid micro-chipping.',
    },
    vg5: {
      name: 'VG-5',
      sub: 'Vanadium Refined Stainless',
      use: 'High-volume restaurant line knives and entry-level kitchen cutlery. Infused with vanadium for a uniform grain structure, making it highly resilient against chipping and easy to touch up on stones.',
    },
    ginsan3: {
      name: 'Ginsan #3',
      sub: 'Silver No. 3',
      use: 'Professional low-maintenance chef knives. Behave almost identically to carbon steel on whetstones.',
    },
    ginsan5: {
      name: 'Ginsan #5',
      sub: 'Silver No. 5 / Gin5',
      use: 'Mass-market traditional style knives and introductory stainless lines. Offers superior stain immunity and structural durability over Silver #3 at a lower cost.',
    },
    aus8: {
      name: 'AUS-8',
      sub: 'Aichi Workhorse',
      use: 'Introductory culinary school knives or heavy line use. Exceptionally forgiving against impacts and bone contact.',
    },
    aus10: {
      name: 'AUS-10',
      sub: 'Aichi Premium',
      use: 'Robust daily prep. A popular alternative to VG-10 providing better overall structural integrity.',
    },
    'molybdenum': {
      name: 'Molybdenum',
      sub: 'Swedish Inox Blends',
      use: 'High-volume commercial restaurant lines (e.g., Misono, MAC). Prioritizes resilience, speed-sharpening, and stain-immunity.',
    },
    'sld': {
      name: 'SLD',
      sub: 'Fine Carbide Die Steel',
      use: 'Versatile all-rounder for Gyutos and Santokus. Finer carbide structure yields a crisp, aggressive edge with good corrosion resistance.',
    },
    // skdSkd11: {
    //   name: 'SKD / SKD11',
    //   sub: 'Coarse Carbide Die Steel',
    //   use: 'Workhorse for continuous slicing of proteins and vegetables. Massive chromium carbides give exceptional abrasive wear resistance; avoid bones.',
    // },
    skd: {
      name: 'SKD',
      sub: 'Medium-Chromium Die Steel',
      use: 'High-end artisan hybrid knives. Delivers traditional high-carbon slicing feedback on whetstones but with slow, highly manageable reactive properties.',
    },
    skd11: {
      name: 'SKD11',
      sub: 'High-Carbon Coarse Die Steel',
      use: 'High-volume commercial workhorses for continuous slicing of heavy proteins and thick vegetables; strictly avoid bones.',
    },
    'chromax': {
      name: 'Chromax',
      sub: 'V/Mo Semi-Stainless',
      use: 'Precision slicing for fine vegetable prep and delicate portioning. Laser-like edge from extreme matrix hardness; prone to chipping if twisted.',
    },
    sg2R2: {
      name: 'SG2 / R2',
      sub: 'Sintered Stainless',
      use: 'High-end daily culinary showpieces. Phenomenal edge life mixed with highly consistent refinement across the edge.',
    },
    zdp189: {
      name: 'ZDP-189',
      sub: 'Hyper-Alloy PM',
      use: 'Strictly delicate slicing. Holds an edge for months, but highly susceptible to brittle fractures if twisted or dropped.',
    },
    hap40: {
      name: 'HAP-40',
      sub: 'Hitachi Tool PM',
      use: 'High-volume commercial processing. Unrivaled wear resistance and structural toughness among high-HRC choices.',
    },
    // srs13Srs15: {
    //   name: 'SRS-13 / SRS-15',
    //   sub: 'Tungsten PM Blend',
    //   use: 'Premium multi-purpose chef knives. Known for a crisp, bright cutting action and highly stable edge holding.',
    // },
    srs13: {
      name: 'SRS-13',
      sub: 'Sanyo PM Stainless',
      use: 'Premium all-rounder chef knives. Provides a highly stable, chip-resistant powder steel edge that holds up to fast line work.',
    },
    srs15: {
      name: 'SRS-15',
      sub: 'Tungsten-Enriched PM',
      use: 'High-performance luxury slicing and fine dicing. Known for a crisp, incredibly bright cutting action and elite longevity.',
    },
  },
};

export default en;
