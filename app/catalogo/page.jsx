import Image from "next/image";
import content from "../../content.json";

const cardVariants = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  muted: "bg-muted text-foreground",
  dark: "bg-foreground text-white",
};

const tagVariants = {
  primary: "bg-white text-primary",
  accent: "bg-white text-accent",
  muted: "bg-primary text-white",
  dark: "bg-white text-foreground",
};

export const metadata = {
  title: content.catalogo.meta.title,
  description: content.catalogo.meta.description,
  openGraph: {
    title: content.catalogo.meta.ogTitle,
    url: `${content.site.url}/catalogo`,
    type: "website",
  },
  alternates: { canonical: "/catalogo" },
};

export default function CatalogoPage() {
  const { heading, subheading, projects } = content.catalogo;

  return (
    <section className="py-16 px-6 bg-white flex-1">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-foreground">{heading}</h1>
        <p className="text-muted-foreground mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-border overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/9] bg-white">
                <Image
                  src={project.image}
                  alt={`${project.name} — icono de la app`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6"
                />
              </div>
              <div className={`${cardVariants[project.variant]} p-6 flex-1 flex flex-col`}>
                <h2 className="text-lg font-bold mb-2">{project.name}</h2>
                <p className="text-sm leading-relaxed opacity-90 mb-4 flex-1">
                  {project.text}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) =>
                    tag.href ? (
                      <a
                        key={tag.label}
                        href={tag.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block ${tagVariants[project.variant]} text-xs font-semibold px-3 py-1 rounded-full hover:opacity-90 transition-opacity`}
                      >
                        {tag.label}
                      </a>
                    ) : (
                      <span
                        key={tag.label}
                        className={`inline-block ${tagVariants[project.variant]} text-xs font-semibold px-3 py-1 rounded-full`}
                      >
                        {tag.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
