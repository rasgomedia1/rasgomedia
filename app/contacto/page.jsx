import content from "../../content.json";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: content.contacto.meta.title,
  description: content.contacto.meta.description,
  openGraph: {
    title: content.contacto.meta.ogTitle,
    url: `${content.site.url}/contacto`,
    type: "website",
  },
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const { heading, subheading, directLabel } = content.contacto;

  return (
    <section className="py-16 px-6 bg-white flex-1">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-foreground">{heading}</h1>
        <p className="text-muted-foreground mb-10">{subheading}</p>

        <ContactForm />

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-1">{directLabel}</p>
          <a
            href={`mailto:${content.site.email}`}
            className="text-primary font-semibold text-sm"
          >
            {content.site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
