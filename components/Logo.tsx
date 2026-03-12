export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="12" fill="#0f0f1a" />
      <text x="50" y="42" fill="#39ff14" fontFamily="monospace" fontWeight="700" fontSize="14" textAnchor="middle">PRICED</text>
      <text x="50" y="62" fill="#39ff14" fontFamily="monospace" fontWeight="700" fontSize="14" textAnchor="middle">IN</text>
      <line x1="20" y1="72" x2="80" y2="72" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
      <text x="50" y="86" fill="#39ff14" fontFamily="monospace" fontSize="8" textAnchor="middle" opacity="0.5">✓ CONFIRMED</text>
    </svg>
  );
}
