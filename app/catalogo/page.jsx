import content from "../../content.json";

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
              className="bg-white border-l-4 border-primary border border-border rounded-lg p-6"
            >
              <h2 className="text-lg font-bold text-foreground mb-2">
                {project.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
                      className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
                    >
                      {tag.label}
                    </a>
                  ) : (
                    <span
                      key={tag.label}
                      className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag.label}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
