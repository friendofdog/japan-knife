import { CATEGORY_META, CATEGORY_TO_LOCALE } from '../constants/categories';

export default function Legend({ locale }) {
  return (
    <div className="legend">
      {CATEGORY_META.map(({ key, icon }) => (
        <span key={key}>{icon} {locale.ui.categoryMetaLabels[CATEGORY_TO_LOCALE[key]]}</span>
      ))}
    </div>
  );
}
