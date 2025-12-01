

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img src="/logo.png" alt="Elinity Logo" className={`${className} object-contain`} />
);