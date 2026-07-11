export default function Badge({ tier, label }) {
  return <span className={`badge ${tier}`}>{label}</span>;
}
