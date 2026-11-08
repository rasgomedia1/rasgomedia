// Páginas legales en dos idiomas: /privacidad + /privacy y /terminos + /terms.
// Cada una recibe su bloque de content.json (privacidad/privacy, terminos/terms).

function Sections({ sections }) {
  return sections.map((section) => (
    <div key={section.h2}>
      <h3 className="text-lg font-bold mb-3 text-primary">{section.h2}</h3>
      <div dangerouslySetInnerHTML={{ __html: section.body }} />
    </div>
  ));
}

function AppIndex({ apps }) {
  if (apps.length === 0) return null;
  return (
    <nav className="mb-10 flex flex-wrap gap-3">
      {apps.map((app) => (
        <a key={app.id} href={`#${app.id}`} className="text-sm font-semibold text-primary hover:underline">
          {app.name}
        </a>
      ))}
    </nav>
  );
}

function AppBlocks({ apps }) {
  return (
    <div className="space-y-16">
      {apps.map((app) => (
        <div key={app.id} id={app.id} className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-1 text-foreground">{app.name}</h2>
          <p className="text-sm text-muted-foreground mb-8">{app.updated}</p>
          <div className="space-y-10 text-sm leading-relaxed text-foreground">
            <Sections sections={app.sections} />
            {app.footerNote && (
              <div className="pt-6 border-t border-border text-muted-foreground">
                <p className="font-semibold text-foreground">{app.footerNote}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Header({ heading, updated, intro, langLink }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4 mb-1">
        <h1 className="text-3xl font-bold text-foreground">{heading}</h1>
        {langLink && (
          <a href={langLink.href} className="shrink-0 mt-2 text-sm font-semibold text-primary hover:underline">
            {langLink.label}
          </a>
        )}
      </div>
      {updated && <p className="text-sm text-muted-foreground mb-2">{updated}</p>}
      <p className="text-sm text-muted-foreground mb-6">{intro}</p>
    </>
  );
}

export function PrivacyPage({ data, lang }) {
  return (
    <section lang={lang} className="py-16 px-6 bg-white flex-1">
      <div className="max-w-3xl mx-auto">
        <Header {...data} />
        <AppIndex apps={data.apps} />
        <AppBlocks apps={data.apps} />
      </div>
    </section>
  );
}

// Términos comunes a todas las apps + condiciones propias de las que las necesiten (data.apps).
export function TermsPage({ data, lang }) {
  return (
    <section lang={lang} className="py-16 px-6 bg-white flex-1">
      <div className="max-w-3xl mx-auto">
        <Header {...data} />
        <AppIndex apps={data.apps} />
        <div className="space-y-10 text-sm leading-relaxed text-foreground">
          <Sections sections={data.sections} />
        </div>
        {data.apps.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="text-2xl font-bold mb-10 text-foreground">{data.appsHeading}</h2>
            <AppBlocks apps={data.apps} />
          </div>
        )}
      </div>
    </section>
  );
}

export function legalMetadata(data, path, altPath, altLang) {
  return {
    title: data.meta.title,
    description: data.meta.description,
    robots: { index: false, follow: true },
    alternates: { canonical: path, languages: { [altLang]: altPath } },
  };
}
