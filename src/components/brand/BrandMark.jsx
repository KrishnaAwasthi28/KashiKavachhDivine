
export default function BrandMark({ size = 30, className = '' }) {
  return (
    <img
      src={"kashi-kavach-logo.png"}
      alt="Kashi Kavach Divine"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}