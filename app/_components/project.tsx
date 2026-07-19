export default function Project({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) {
  const hostname = new URL(link).hostname.toUpperCase();

  return (
    <a
      href={link}
      target="_blank"
      className="block py-4 hover:opacity-75 transition-opacity duration-200 space-y-1.5"
    >
      <h4 className="font-serif text-base font-normal text-amber-50">{name}</h4>
      <p className="text-[10px] tracking-[0.15em] text-foreground/40">{hostname}</p>
      <p className="text-sm text-foreground/70">{description}</p>
    </a>
  );
}
