import { useState, useMemo } from 'react';
import rawSteels from './data/steels.js';
import locale from './locales/en.js';
import { CATEGORIES, CATEGORY_TO_LOCALE } from './constants/categories';
import Legend from './components/Legend';
import SteelTable from './components/SteelTable';

const steels = rawSteels.map(s => {
  if (import.meta.env.DEV && !locale.steels[s.key]) {
    console.warn('Missing locale for steel key:', s.key);
  }
  return { ...s, ...locale.steels[s.key] };
});

const COLUMNS = [
  { key: 'maxSharpness', label: locale.ui.columns.maxSharpness },
  { key: 'corrosionRes', label: locale.ui.columns.corrosionRes },
  { key: 'edgeRetention', label: locale.ui.columns.edgeRetention },
  { key: 'toughness', label: locale.ui.columns.toughness },
  { key: 'easeOfSharp', label: locale.ui.columns.easeOfSharp },
  { key: 'maxHardness', label: locale.ui.columns.maxHardness },
  { key: 'value', label: locale.ui.columns.value },
];

export default function App() {
  const [category, setCategory] = useState(CATEGORIES.ALL);
  const [sort, setSort] = useState({ col: null, dir: 'asc' });

  const displayed = useMemo(() => {
    const filtered = category === CATEGORIES.ALL
      ? steels
      : steels.filter(s => s.category === category);

    if (!sort.col) return filtered;

    return [...filtered].sort((a, b) => {
      const rawA = a[sort.col];
      const rawB = b[sort.col];
      const valA = typeof rawA === 'object' ? rawA.val : rawA ?? 0;
      const valB = typeof rawB === 'object' ? rawB.val : rawB ?? 0;
      return sort.dir === 'asc' ? valA - valB : valB - valA;
    });
  }, [category, sort]);

  const handleSort = (col) => {
    const defaultDir = col === 'value' ? 'asc' : 'desc';
    setSort(prev => {
      if (prev.col === col) {
        if (prev.dir === defaultDir) return { col, dir: defaultDir === 'asc' ? 'desc' : 'asc' };
        return { col: null, dir: defaultDir };
      }
      return { col, dir: defaultDir };
    });
  };

  return (
    <div>
      <header className="site-header">
        <h1>{locale.ui.siteTitle}</h1>
        <p className="subtitle">{locale.ui.siteSubtitle}</p>
      </header>

      <div className="controls-container">
        <label htmlFor="categoryFilter">{locale.ui.filterLabel}</label>
        <select
          id="categoryFilter"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {Object.entries(CATEGORY_TO_LOCALE).map(([slug, localeKey]) => (
            <option key={slug} value={slug}>{locale.ui.categoryLabels[localeKey]}</option>
          ))}
        </select>
      </div>

      <Legend />

      <SteelTable steels={displayed} columns={COLUMNS} sort={sort} onSort={handleSort} />

      <footer className="site-footer">
        {locale.ui.footerText}
      </footer>
    </div>
  );
}
