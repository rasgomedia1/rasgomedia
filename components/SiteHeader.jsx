import Image from "next/image";
import content from "../content.json";

export default function SiteHeader() {
  return (
    <div className="w-full bg-white border-b border-border px-4 md:px-6 py-3 md:py-4 flex items-center gap-3">
      <Image
        src="/logo.jpg"
        alt={content.site.logoAlt}
        width={96}
        height={96}
        priority
        className="h-10 md:h-12 w-auto object-contain shrink-0"
      />
      <span className="font-bold text-lg text-foreground tracking-tight">
        {content.site.name}
      </span>
    </div>
  );
}
