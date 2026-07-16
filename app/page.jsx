import Link from "next/link";
import content from "../content.json";

const cardVariants = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  muted: "bg-muted text-foreground",
  dark: "bg-foreground text-white",
};

export default function HomePage() {
  const { hero, services, why, finalCta } = content.home;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">{hero.subtitle}</p>
          <Link
            href="/contacto"
            className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            {hero.cta}
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            {services.heading}
          </h2>
          <p className="text-muted-foreground mb-10">{services.subheading}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.items.map((item) => (
              <div
                key={item.title}
                className={`${cardVariants[item.variant]} rounded-lg p-6`}
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-foreground">
            {why.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {why.items.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-lg p-6 border border-border"
              >
                <span className="text-3xl font-extrabold text-primary block mb-3">
                  {item.num}
                </span>
                <h3 className="text-base font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 px-6 bg-accent text-white text-center">
        <h2 className="text-2xl font-bold mb-3">{finalCta.heading}</h2>
        <p className="text-white/85 mb-6">{finalCta.text}</p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
        >
          {finalCta.button}
        </Link>
      </section>
    </>
  );
}
