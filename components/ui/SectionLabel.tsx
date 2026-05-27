interface SectionLabelProps {
  label: string;
  center?: boolean;
}

export default function SectionLabel({ label, center = false }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[9px] tracking-[4px] uppercase text-gold mb-4 ${
        center ? "text-center" : ""
      }`}
    >
      {label}
    </p>
  );
}
