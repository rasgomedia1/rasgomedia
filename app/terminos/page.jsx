import content from "../../content.json";

export const metadata = {
  title: content.terminos.meta.title,
  description: content.terminos.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/terminos" },
};

function Sections({ sections }) {
  return sections.map((section) => (
    <div key={section.h2}>
      <h3 className="text-lg font-bold mb-3 text-primary">{section.h2}</h3>
      <div dangerouslySetInnerHTML={{ __html: section.body }} />
    </div>
  ));
}

// Términos comunes a todas las apps + condiciones propias de las que las necesiten
// (content.terminos.apps, misma forma que content.privacidad.apps).
export default function TerminosPage() {
  const { heading, updated, intro, sections, appsHeading, apps } = content.terminos;

  return (
    <section className="py-16 px-6 bg-white flex-1">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-1 text-foreground">{heading}</h1>
        <p className="text-sm text-muted-foreground mb-2">{updated}</p>
        <p className="text-sm text-muted-foreground mb-6">{intro}</p>

        {apps.length > 0 && (
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
        )}

        <div className="space-y-10 text-sm leading-relaxed text-foreground">
          <Sections sections={sections} />
        </div>

        {apps.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="text-2xl font-bold mb-10 text-foreground">{appsHeading}</h2>
            <div className="space-y-16">
              {apps.map((app) => (
                <div key={app.id} id={app.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-1 text-foreground">{app.name}</h2>
                  <p className="text-sm text-muted-foreground mb-8">{app.updated}</p>
                  <div className="space-y-10 text-sm leading-relaxed text-foreground">
                    <Sections sections={app.sections} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
