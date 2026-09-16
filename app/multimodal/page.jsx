import content from "../../content.json";
import ReelGrid from "../../components/ReelGrid";

const { meta } = content.multimodal;

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.ogTitle,
    description: meta.description,
    url: `${content.site.url}/multimodal`,
    siteName: content.site.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: meta.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.ogTitle,
    description: meta.description,
    images: [meta.ogImage],
  },
  // Sin og:image:secure_url a proposito: `other` lo emite como name= en vez de
  // property=, que no es Open Graph valido, y og:image ya sale absoluta en
  // https gracias a metadataBase — el secure_url no aportaria nada.
  alternates: { canonical: "/multimodal" },
};

export default function MultimodalPage() {
  const { eyebrow, heading, subheading } = content.multimodal;

  return (
    <section className="flex-1 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <header className="pt-16 pb-12">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary mb-3">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance max-w-[18ch] mb-4">
            {heading}
          </h1>
          <p className="text-muted-foreground max-w-[62ch] md:text-lg">{subheading}</p>
        </header>

        <ReelGrid />
      </div>
    </section>
  );
}
