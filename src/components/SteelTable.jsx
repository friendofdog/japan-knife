import { CATEGORY_META } from '../constants/categories';

const ICON_BY_CATEGORY = Object.fromEntries(
  CATEGORY_META.map(({ key, icon }) => [key, icon])
);

const METER_COLS = new Set(['maxSharpness', 'corrosionRes', 'edgeRetention', 'toughness', 'easeOfSharp']);

export default function SteelTable({ steels, columns, sort, onSort, locale }) {
  return (
    <div className="table-container">
      <table>
        <colgroup>
          <col style={{ width: '160px' }} />
          {columns.map(col => (
            <col
              key={col.key}
              style={{
                width: METER_COLS.has(col.key) ? '8%' : 'auto',
                minWidth: '90px'
              }}
            />
          ))}
          <col style={{ width: 'auto' }} />
        </colgroup>
        <thead>
          <tr>
            <th>{locale.ui.tableHeaders.steelType}</th>
            {columns.map(col => {
              const active = sort.col === col.key;
              const cls = [
                'sortable',
                METER_COLS.has(col.key) && 'meter-col',
                active && sort.dir === 'asc' && 'sort-asc',
                active && sort.dir === 'desc' && 'sort-desc',
              ].filter(Boolean).join(' ');
              return (
                <th key={col.key} className={cls} onClick={() => onSort(col.key)}>
                  {col.label}
                </th>
              );
            })}
            <th>{locale.ui.tableHeaders.intendedUse}</th>
          </tr>
        </thead>
        <tbody>
          {steels.map(steel => (
            <tr key={steel.name}>
              <td>
                <div className="steel-cell">
                  <span className="steel-icon">{ICON_BY_CATEGORY[steel.category]}</span>
                  <div>
                    <span className="steel-name">{steel.name}</span>
                    <span className="steel-sub">{steel.sub}</span>
                  </div>
                </div>
              </td>
              {columns.map(col => {
                const val = steel[col.key];
                if (col.key === 'maxHardness') {
                  return (
                    <td key={col.key} className="metric">{val.label}</td>
                  );
                }
                if (METER_COLS.has(col.key)) {
                  return (
                    <td key={col.key} className="meter-col">
                      <meter min={0} max={10} low={3.5} high={7.5} optimum={10} value={val} />
                    </td>
                  );
                }
                if (col.key === 'value') {
                  const tier = val >= 6 ? 'low' : val >= 4 ? 'med' : 'high';
                  const fullCount = Math.floor(val / 2);
                  const isHalf = val % 2 !== 0;
                  return (
                    <td key={col.key}>
                      <span className={`badge yen ${tier}`}>
                        {'¥'.repeat(fullCount)}
                        {isHalf && '½'}
                      </span>
                    </td>
                  );
                }
              })}
              <td>{steel.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
