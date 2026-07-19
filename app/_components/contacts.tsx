export default function ContactLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      className="group text-sm inline-flex items-center gap-x-0.5 hover:text-foreground transition-colors duration-200"
    >
      {label}
    </a>
  );
}
