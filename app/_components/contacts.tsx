interface ContactProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function Contact({ href, icon, label }: ContactProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="font-medium py-2 rounded-full hover:opacity-80 text-xs transition-all duration-300 flex items-center gap-x-2"
    >
      {icon}
      {label}
    </a>
  );
}
