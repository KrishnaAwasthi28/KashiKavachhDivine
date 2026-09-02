import BrandMark from './BrandMark';

export default function FullLogo({ size = '60', className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandMark size={size} />
      <div className="flex flex-col leading-none">
        <span className="font-cinzel text-[20px] tracking-[0.15em] text-[#e8dac6]">
          KashiKavach
        </span>
        <span className="font-sans text-[14px] tracking-[0.4em] uppercase text-[#c5a028] mt-[3px]">
          Divine
        </span>
      </div>
    </div>
  );
}
