import { useState, useMemo } from 'react';
import steels from './data/steels.js';
import { CATEGORIES, CATEGORY_LABELS } from './constants/categories';
import Legend from './components/Legend';
import SteelTable from './components/SteelTable';

const COLUMNS = [
  { key: 'maxSharpness', label: 'Max Sharpness' },
  { key: 'corrosionRes', label: 'Corrosion Res.' },
  { key: 'edgeRetention', label: 'Edge Retention' },
  { key: 'toughness', label: 'Toughness' },
  { key: 'easeOfSharp', label: 'Ease of Sharp.' },
  { key: 'maxHardness', label: 'Max Hardness' },
  { key: 'relativeCost', label: 'Relative Cost' },
  { key: 'lifespan', label: 'Lifespan' },
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
    setSort(prev => {
      if (prev.col === col) {
        if (prev.dir === 'asc') return { col, dir: 'desc' };
        return { col: null, dir: 'asc' };
      }
      return { col, dir: 'asc' };
    });
  };

  return (
    <div>
      <header className="site-header">
        <h1>Japanese Knife Steel Reference Guide</h1>
        <p className="subtitle">
          Interactive metallurgical matrix spanning carbon, stainless, semi-stainless, and powder compositions
        </p>
      </header>

      <div className="controls-container">
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {Object.entries(CATEGORY_LABELS).map(([val, label]) => (
            <option key={val} value={val}>{label}</option>
          ))}
        </select>
      </div>

      <Legend />

      <SteelTable steels={displayed} columns={COLUMNS} sort={sort} onSort={handleSort} />

      <footer className="site-footer">
        Japanese Knife Steel Performance Matrices • Interactive Reference Chart
      </footer>
    </div>
  );
}
