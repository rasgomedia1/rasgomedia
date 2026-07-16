import content from "../../content.json";

export const metadata = {
  title: content.privacidad.meta.title,
  description: content.privacidad.meta.description,
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  const { heading, updated, sections, footerNote } = content.privacidad;

  return (
    <section className="py-16 px-6 bg-white flex-1">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-1 text-foreground">{heading}</h1>
        <p className="text-sm text-muted-foreground mb-10">{updated}</p>

        <div className="space-y-10 text-sm leading-relaxed text-foreground">
          {sections.map((section) => (
            <div key={section.h2}>
              <h2 className="text-lg font-bold mb-3 text-primary">
                {section.h2}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            </div>
          ))}

          <div className="pt-6 border-t border-border text-muted-foreground">
            <p className="font-semibold text-foreground">{footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
