import { CATEGORY_META } from '../constants/categories';

export default function Legend() {
  return (
    <div className="legend">
      {CATEGORY_META.map(({ key, icon, label }) => (
        <span key={key}>{icon} {label}</span>
      ))}
    </div>
  );
}
