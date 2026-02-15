interface BrandLogoProps {
  className?: string;
  height?: number;
}

export default function BrandLogo({ className = '', height = 32 }: BrandLogoProps) {
  return (
    <img
      src="/assets/generated/solvirostudio-logo-header-v2.dim_800x240.png"
      alt="SolviroStudio logo"
      height={height}
      width={height * 2.5}
      className={`logo-crisp object-contain ${className}`}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}
