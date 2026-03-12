export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="8" fill="#0a0a0f" stroke="#39ff14" strokeWidth="1" strokeOpacity="0.2" />
      {/* Checkmark / tick */}
      <path d="M30 52 L44 66 L70 36" stroke="#39ff14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Subtle glow */}
      <circle cx="50" cy="50" r="30" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}
