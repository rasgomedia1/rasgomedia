import content from "../../content.json";

export const metadata = {
  title: content.privacidad.meta.title,
  description: content.privacidad.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  const { heading, intro, apps } = content.privacidad;

  return (
    <section className="py-16 px-6 bg-white flex-1">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-1 text-foreground">{heading}</h1>
        <p className="text-sm text-muted-foreground mb-6">{intro}</p>

        <nav className="mb-10 flex flex-wrap gap-3">
          {apps.map((app) => (
            <a
              key={app.id}
              href={`#${app.id}`}
              className="text-sm font-semibold text-primary hover:underline"
            >
              {app.name}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {apps.map((app) => (
            <div key={app.id} id={app.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-1 text-foreground">{app.name}</h2>
              <p className="text-sm text-muted-foreground mb-8">{app.updated}</p>

              <div className="space-y-10 text-sm leading-relaxed text-foreground">
                {app.sections.map((section) => (
                  <div key={section.h2}>
                    <h3 className="text-lg font-bold mb-3 text-primary">
                      {section.h2}
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: section.body }} />
                  </div>
                ))}

                <div className="pt-6 border-t border-border text-muted-foreground">
                  <p className="font-semibold text-foreground">{app.footerNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
