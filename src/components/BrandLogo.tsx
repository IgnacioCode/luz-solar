import Link from 'next/link';

type BrandLogoProps = {
  href?: string;
  onClick?: () => void;
  id?: string;
  textClassName?: string;
  subTextClassName?: string;
};

export default function BrandLogo({
  href = '/',
  onClick,
  id,
  textClassName = 'text-[#006CB5]',
  subTextClassName = 'text-[#6DA42C]',
}: BrandLogoProps) {
  const content = (
    <>
      <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
        <img src="/logoLuzSolarSolo.png" alt="" className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col items-center">
        <span className={`text-xl font-bold leading-none tracking-tight transition-colors ${textClassName}`}>LUZ <span className="text-[#F98A1E]">SOLAR</span></span>
        <span className={`text-center font-mono text-[10px] font-bold uppercase leading-tight tracking-[0.28em] transition-colors ${subTextClassName}`}>SRL</span>
      </div>
    </>
  );

  const className = 'group flex shrink-0 items-center space-x-2.5';

  if (onClick) {
    return <button id={id} type="button" onClick={onClick} className={`${className} cursor-pointer`} aria-label="Ir al inicio">{content}</button>;
  }

  return <Link id={id} href={href} className={className} aria-label="Ir al inicio">{content}</Link>;
}
