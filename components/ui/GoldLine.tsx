interface GoldLineProps {
  className?: string;
}

export default function GoldLine({ className = "" }: GoldLineProps) {
  return (
    <div
      className={`h-px w-16 ${className}`}
      style={{
        background: "linear-gradient(90deg, #c9a96e, transparent)",
      }}
    />
  );
}
