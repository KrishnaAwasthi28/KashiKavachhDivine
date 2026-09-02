import BrandMark from "./BrandMark";

export default function FullLogo({
  size = 60,
  variant = "default",
  className = "",
}) {
  const isSmall = variant === "small";

  return (
    <div
      className={`flex items-center ${
        isSmall ? "gap-2" : "gap-3"
      } ${className}`}
    >
      <BrandMark size={size} />

      <div className="flex flex-col leading-none">
        <span
          className={`font-cinzel tracking-[0.15em] text-[#e8dac6] ${
            isSmall ? "text-[12px]" : "text-[20px]"
          }`}
        >
          KashiKavach
        </span>

        <span
          className={`font-sans uppercase text-[#c5a028] mt-[3px] ${
            isSmall
              ? "text-[8px] tracking-[0.35em]"
              : "text-[14px] tracking-[0.4em]"
          }`}
        >
          Divine
        </span>
      </div>
    </div>
  );
}