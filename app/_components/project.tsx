import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Project({
  name,
  description,
  image,
  link,
}: {
  name: string;
  description: string;
  image: string | StaticImport;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex gap-x-4 items-center hover:opacity-75 rounded-xl transition-all duration-200 ease-in-out"
    >
      <div className="shrink-0 relative rounded-lg overflow-hidden size-16">
        <Image src={image} alt={`${name} logo`} fill className="object-cover" />
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex gap-x-4">
          <h4 className="font-medium">{name}</h4>
        </div>

        <p className="font-medium text-xs text-foreground/80">{description}</p>
      </div>
    </a>
  );
}
